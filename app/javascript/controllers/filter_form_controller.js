// // #############################
// // checkboxes work after filters but sorting clears selected rows
// // reregister sorting after each action otherwise we loose all selected rows with each sort.
// // #############################
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form"];

  attachEventListeners() {
    // // Attach event listeners to individual checkboxes not needed with the table div
    // // <div data-controller="filter-form">
    // this.checkboxes = document.querySelectorAll(
    //   'input[name="selected_rows[]"]',
    // );
    // this.checkboxes.forEach((checkbox) => {
    //   checkbox.addEventListener("change", (event) =>
    //     this.handleRowSelection(event),
    //   );
    // });

    // Attach event listeners to sort links - otherwise we loose all selected rows with each sort.
    document.querySelectorAll(".sort-link").forEach((link) => {
      link.addEventListener("click", (e) => this.handleSort(e));
    });

    // // Attach event listener to the "Select All" checkbox - not needed with table div
    // <div data-controller="filter-form">
    // const selectAllCheckbox = document.getElementById("select-all");
    // if (selectAllCheckbox) {
    //   selectAllCheckbox.addEventListener("change", (event) =>
    //     this.toggleSelectAll(event),
    //   );
    // }
  }

  connect() {
    this.selectedRows = new Set();

    // Load existing selections from URL
    const selectedParam = new URLSearchParams(window.location.search).get(
      "selected_rows",
    );
    if (selectedParam) {
      selectedParam.split(",").forEach((id) => this.selectedRows.add(id));
    }

    // Set initial checkbox states
    this.updateCheckboxStates();

    // Attach event listeners
    this.attachEventListeners();
  }

  updateCheckboxStates() {
    // Mark checkboxes as checked/unchecked based on our selectedRows
    document
      .querySelectorAll('input[name="selected_rows[]"]')
      .forEach((checkbox) => {
        checkbox.checked = this.selectedRows.has(checkbox.value);
      });

    this.updateSelectAllState();
  }

  // selects all visible checkboxes
  // select all avoids duplicate selections
  // deselects all visible checkboxes
  updateSelectAllState() {
    // If all visible items are selected, check the "select-all" box
    // otherwise uncheck it
    const allVisible = [
      ...document.querySelectorAll('input[name="selected_rows[]"]'),
    ];
    const allVisibleIds = new Set(allVisible.map((cb) => cb.value));
    const howManyVisibleSelected = [...this.selectedRows].filter((id) =>
      allVisibleIds.has(id),
    );

    const selectAllCheckbox = document.getElementById("select-all");
    if (selectAllCheckbox) {
      selectAllCheckbox.checked =
        howManyVisibleSelected.length > 0 &&
        howManyVisibleSelected.length === allVisible.length;
    }
  }

  handleRowSelection(event) {
    const checkbox = event.target;

    if (checkbox.checked) {
      this.selectedRows.add(checkbox.value);
    } else {
      this.selectedRows.delete(checkbox.value);
    }

    this.updateUrlParams();
    // Optionally update "select-all" checkbox
    this.updateSelectAllState();
  }

  toggleSelectAll(event) {
    const isChecked = event.target.checked;

    // All currently visible row checkboxes
    const visibleCheckboxes = document.querySelectorAll(
      'input[name="selected_rows[]"]',
    );

    if (isChecked) {
      // **Add** all visible items to the set (union),
      // so we don't remove previously selected ones outside the current filter.
      visibleCheckboxes.forEach((checkbox) => {
        checkbox.checked = true;
        this.selectedRows.add(checkbox.value);
      });
    } else {
      // **Remove** all visible items from the set (difference).
      // This keeps hidden items that were selected in other filters.
      visibleCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
        this.selectedRows.delete(checkbox.value);
      });
    }

    this.updateUrlParams();
  }

  updateUrlParams() {
    const currentParams = new URLSearchParams(window.location.search);

    if (this.selectedRows.size > 0) {
      currentParams.set(
        "selected_rows",
        Array.from(this.selectedRows).join(","),
      );
    } else {
      currentParams.delete("selected_rows");
    }

    const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }

  handleSort(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const url = new URL(link.href);
    const currentParams = new URLSearchParams(window.location.search);
    const newParams = new URLSearchParams(url.search);

    currentParams.forEach((value, key) => {
      if (key !== "column" && key !== "direction") {
        newParams.set(key, value);
      }
    });

    if (this.selectedRows.size > 0) {
      newParams.set("selected_rows", Array.from(this.selectedRows).join(","));
    }

    Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
      action: "replace",
    }).then(() => {
      this.updateCheckboxStates();
      this.attachEventListeners(); // Re-attach event listeners
    });
  }

  filter(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const currentParams = new URLSearchParams(window.location.search);
      const formData = new FormData(event.target.form);

      // Preserve all existing parameters
      currentParams.forEach((value, key) => {
        if (!formData.has(key) && key !== "column" && key !== "direction") {
          formData.append(key, value);
        }
      });

      // Preserve sort parameters
      if (currentParams.has("column")) {
        formData.append("column", currentParams.get("column"));
        formData.append("direction", currentParams.get("direction"));
      }

      // Ensure selections are included only once
      if (this.selectedRows.size > 0) {
        formData.set("selected_rows", Array.from(this.selectedRows).join(","));
      }

      const searchParams = new URLSearchParams(formData);

      Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
        action: "replace",
      }).then(() => {
        this.updateCheckboxStates();
        this.attachEventListeners(); // Re-attach event listeners
      });
    }, 300);
  }
}
