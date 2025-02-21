import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!";
  }
}

// History
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   filter() {
//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       this.formTarget.requestSubmit();
//     }, 300);
//   }
// }

// // with multiple filters and selections
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   filter(event) {
//     clearTimeout(this.timeout);

//     this.timeout = setTimeout(() => {
//       // Get all current filter values
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       // Preserve all existing filters except the one being updated
//       const filterKeys = [
//         "company_filter",
//         "lastname_filter",
//         "firstname_filter",
//         "gender_selection",
//         "species_selection",
//       ];
//       filterKeys.forEach((key) => {
//         if (!formData.has(key) && currentParams.has(key)) {
//           formData.append(key, currentParams.get(key));
//         }
//       });

//       // Preserve sort parameters if they exist
//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       // Convert FormData to URLSearchParams
//       const searchParams = new URLSearchParams(formData);

//       // Use Turbo to visit the URL with all parameters
//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       });
//     }, 300);
//   }
// }

// // allow sort to capture the url params of filters and dropdown
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   connect() {
//     // Match links with the sort-link class
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });
//   }

//   handleSort(event) {
//     event.preventDefault();
//     const link = event.currentTarget;
//     const url = new URL(link.href);
//     const currentParams = new URLSearchParams(window.location.search);

//     // Get sort parameters from the clicked link
//     const newParams = new URLSearchParams(url.search);

//     // Preserve all filter parameters
//     const filterKeys = [
//       "company_filter",
//       "lastname_filter",
//       "firstname_filter",
//       "gender_selection",
//       "species_selection",
//     ];

//     filterKeys.forEach((key) => {
//       if (currentParams.has(key)) {
//         newParams.set(key, currentParams.get(key));
//       }
//     });

//     Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
//       action: "replace",
//     });
//   }

//   filter(event) {
//     clearTimeout(this.timeout);

//     this.timeout = setTimeout(() => {
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       const filterKeys = [
//         "company_filter",
//         "lastname_filter",
//         "firstname_filter",
//         "gender_selection",
//         "species_selection",
//       ];

//       filterKeys.forEach((key) => {
//         if (!formData.has(key) && currentParams.has(key)) {
//           formData.append(key, currentParams.get(key));
//         }
//       });

//       // Preserve sort parameters
//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       const searchParams = new URLSearchParams(formData);

//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       });
//     }, 300);
//   }
// }

// #############################################
// // handles all of the above and row selection
// #############################################
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   connect() {
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });
//   }

//   handleRowSelection(event) {
//     const currentParams = new URLSearchParams(window.location.search);
//     const selectedCheckboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]:checked',
//     );
//     const selectedIds = Array.from(selectedCheckboxes).map((cb) => cb.value);

//     if (selectedIds.length > 0) {
//       currentParams.set("selected_rows", selectedIds.join(","));
//     } else {
//       currentParams.delete("selected_rows");
//     }

//     // Just update URL without page reload
//     const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
//     window.history.replaceState({}, "", newUrl);
//   }

//   handleSort(event) {
//     event.preventDefault();
//     const link = event.currentTarget;
//     const url = new URL(link.href);
//     const currentParams = new URLSearchParams(window.location.search);
//     const newParams = new URLSearchParams(url.search);

//     // Preserve all existing parameters except sort ones
//     currentParams.forEach((value, key) => {
//       if (key !== "column" && key !== "direction") {
//         newParams.set(key, value);
//       }
//     });

//     Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
//       action: "replace",
//     });
//   }

//   filter(event) {
//     clearTimeout(this.timeout);

//     this.timeout = setTimeout(() => {
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       // Preserve all existing parameters that aren't in the current form
//       currentParams.forEach((value, key) => {
//         if (!formData.has(key) && key !== "column" && key !== "direction") {
//           formData.append(key, value);
//         }
//       });

//       // Preserve sort parameters
//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       const searchParams = new URLSearchParams(formData);

//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       });
//     }, 300);
//   }
// }

// // ###################################
// // // handle row selection persistence
// // ###################################
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   // Initialize selected rows Set when controller connects
//   connect() {
//     this.selectedRows = new Set();

//     // Load any existing selections from URL
//     const selectedParam = new URLSearchParams(window.location.search).get(
//       "selected_rows",
//     );
//     if (selectedParam) {
//       selectedParam.split(",").forEach((id) => this.selectedRows.add(id));
//     }

//     // Set initial checkbox states
//     this.updateCheckboxStates();

//     // Add sort link handlers
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });
//   }

//   // Update UI to match stored selections
//   updateCheckboxStates() {
//     document
//       .querySelectorAll('input[name="selected_rows[]"]')
//       .forEach((checkbox) => {
//         checkbox.checked = this.selectedRows.has(checkbox.value);
//       });
//   }

//   // Handle checkbox changes
//   handleRowSelection(event) {
//     const checkbox = event.target;

//     if (checkbox.checked) {
//       this.selectedRows.add(checkbox.value);
//     } else {
//       this.selectedRows.delete(checkbox.value);
//     }

//     // Update URL with current selections
//     const currentParams = new URLSearchParams(window.location.search);
//     if (this.selectedRows.size > 0) {
//       currentParams.set(
//         "selected_rows",
//         Array.from(this.selectedRows).join(","),
//       );
//     } else {
//       currentParams.delete("selected_rows");
//     }

//     const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
//     window.history.replaceState({}, "", newUrl);
//   }

//   handleSort(event) {
//     event.preventDefault();
//     const link = event.currentTarget;
//     const url = new URL(link.href);
//     const currentParams = new URLSearchParams(window.location.search);
//     const newParams = new URLSearchParams(url.search);

//     // Preserve all existing parameters except sort ones
//     currentParams.forEach((value, key) => {
//       if (key !== "column" && key !== "direction") {
//         newParams.set(key, value);
//       }
//     });

//     // Ensure selections are included
//     if (this.selectedRows.size > 0) {
//       newParams.set("selected_rows", Array.from(this.selectedRows).join(","));
//     }

//     Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
//       action: "replace",
//     }).then(() => {
//       this.updateCheckboxStates();
//     });
//   }

//   filter(event) {
//     clearTimeout(this.timeout);

//     this.timeout = setTimeout(() => {
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       // Preserve all existing parameters that aren't in the current form
//       currentParams.forEach((value, key) => {
//         if (!formData.has(key) && key !== "column" && key !== "direction") {
//           formData.append(key, value);
//         }
//       });

//       // Preserve sort parameters
//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       // Ensure selections are included
//       if (this.selectedRows.size > 0) {
//         formData.append(
//           "selected_rows",
//           Array.from(this.selectedRows).join(","),
//         );
//       }

//       const searchParams = new URLSearchParams(formData);

//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       }).then(() => {
//         this.updateCheckboxStates();
//       });
//     }, 300);
//   }
// }

// // #########################
// // Mistral - fixes selection
// // some checkboxes stop responding
// // #########################
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   attachEventListeners() {
//     // Attach event listeners to individual checkboxes
//     this.checkboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]',
//     );
//     this.checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", (event) =>
//         this.handleRowSelection(event),
//       );
//     });

//     // Attach event listeners to sort links
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });

//     // Attach event listener to the "Select All" checkbox
//     const selectAllCheckbox = document.getElementById("select-all");
//     if (selectAllCheckbox) {
//       selectAllCheckbox.addEventListener("change", (event) =>
//         this.toggleSelectAll(event),
//       );
//     }
//   }

//   connect() {
//     this.selectedRows = new Set();
//     // console.log("Form target:", this.formTarget);

//     // Load existing selections from URL
//     const selectedParam = new URLSearchParams(window.location.search).get(
//       "selected_rows",
//     );
//     if (selectedParam) {
//       selectedParam.split(",").forEach((id) => this.selectedRows.add(id));
//     }

//     // Set initial checkbox states
//     this.updateCheckboxStates();

//     // Manually add checkboxes to the targets
//     // (checkboxes are otherwise automatically registered in the formTarget list)
//     this.checkboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]',
//     );
//     this.checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", (event) =>
//         this.handleRowSelection(event),
//       );
//     });

//     // Manually attach "Select All" listener for the same reason as above
//     const selectAllCheckbox = document.getElementById("select-all");
//     if (selectAllCheckbox) {
//       selectAllCheckbox.addEventListener("change", (event) =>
//         this.toggleSelectAll(event),
//       );
//     }

//     // Add sort link handlers
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });
//   }

//   toggleSelectAll(event) {
//     const isChecked = event.target.checked;
//     const visibleCheckboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]:not([style*="display: none"])',
//     );

//     // Clear existing selections
//     this.selectedRows.clear();

//     visibleCheckboxes.forEach((checkbox) => {
//       checkbox.checked = isChecked;
//       if (isChecked) {
//         this.selectedRows.add(checkbox.value);
//       }
//     });

//     this.updateUrlParams();
//   }

//   // Update UI to reflect stored selections
//   updateCheckboxStates() {
//     document
//       .querySelectorAll('input[name="selected_rows[]"]')
//       .forEach((checkbox) => {
//         checkbox.checked = this.selectedRows.has(checkbox.value);
//       });
//   }

//   // Handle row selection
//   handleRowSelection(event) {
//     console.log("Row selection changed");
//     const checkbox = event.target;

//     if (checkbox.checked) {
//       this.selectedRows.add(checkbox.value);
//     } else {
//       this.selectedRows.delete(checkbox.value);
//     }

//     // Update URL with selected rows
//     this.updateUrlParams();
//   }

//   updateUrlParams() {
//     const currentParams = new URLSearchParams(window.location.search);
//     if (this.selectedRows.size > 0) {
//       currentParams.set(
//         "selected_rows",
//         Array.from(this.selectedRows).join(","),
//       );
//     } else {
//       currentParams.delete("selected_rows");
//     }

//     const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
//     window.history.replaceState({}, "", newUrl);
//   }

//   handleSort(event) {
//     console.log("Sort link clicked");
//     event.preventDefault();
//     const link = event.currentTarget;
//     const url = new URL(link.href);
//     const currentParams = new URLSearchParams(window.location.search);
//     const newParams = new URLSearchParams(url.search);

//     // Preserve all filters and existing parameters except sorting ones
//     currentParams.forEach((value, key) => {
//       if (key !== "column" && key !== "direction") {
//         newParams.set(key, value);
//       }
//     });

//     // Ensure selections persist
//     if (this.selectedRows.size > 0) {
//       newParams.set("selected_rows", Array.from(this.selectedRows).join(","));
//     }

//     Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
//       action: "replace",
//     }).then(() => {
//       this.updateCheckboxStates();
//       // this.attachEventListeners(); // Re-attach event listeners
//     });
//   }

//   filter(event) {
//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       // Preserve all existing parameters
//       currentParams.forEach((value, key) => {
//         if (!formData.has(key) && key !== "column" && key !== "direction") {
//           formData.append(key, value);
//         }
//       });

//       // Preserve sort parameters
//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       // Ensure selections are included only once
//       if (this.selectedRows.size > 0) {
//         formData.set("selected_rows", Array.from(this.selectedRows).join(","));
//       }

//       const searchParams = new URLSearchParams(formData);

//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       }).then(() => {
//         this.updateCheckboxStates();
//         this.attachEventListeners(); // Re-attach event listeners
//       });
//     }, 300);
//   }
// }

// // // #############################
// // // some checkboxes stop responding
// // // #############################
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   attachEventListeners() {
//     // Attach event listeners to individual checkboxes
//     this.checkboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]',
//     );
//     this.checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", (event) =>
//         this.handleRowSelection(event),
//       );
//     });

//     // Attach event listeners to sort links
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });

//     // Attach event listener to the "Select All" checkbox
//     const selectAllCheckbox = document.getElementById("select-all");
//     if (selectAllCheckbox) {
//       selectAllCheckbox.addEventListener("change", (event) =>
//         this.toggleSelectAll(event),
//       );
//     }
//   }

//   connect() {
//     this.selectedRows = new Set();

//     // Load existing selections from URL
//     const selectedParam = new URLSearchParams(window.location.search).get(
//       "selected_rows",
//     );
//     if (selectedParam) {
//       selectedParam.split(",").forEach((id) => this.selectedRows.add(id));
//     }

//     // Set initial checkbox states
//     this.updateCheckboxStates();

//     // Attach event listeners
//     // this.attachEventListeners();
//   }

//   toggleSelectAll(event) {
//     const isChecked = event.target.checked;
//     const visibleCheckboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]:not([style*="display: none"])',
//     );

//     // Clear existing selections
//     this.selectedRows.clear();

//     visibleCheckboxes.forEach((checkbox) => {
//       checkbox.checked = isChecked;
//       if (isChecked) {
//         this.selectedRows.add(checkbox.value);
//       }
//     });

//     this.updateUrlParams();
//   }

//   updateCheckboxStates() {
//     document
//       .querySelectorAll('input[name="selected_rows[]"]')
//       .forEach((checkbox) => {
//         checkbox.checked = this.selectedRows.has(checkbox.value);
//       });
//   }

//   handleRowSelection(event) {
//     const checkbox = event.target;

//     if (checkbox.checked) {
//       this.selectedRows.add(checkbox.value);
//     } else {
//       this.selectedRows.delete(checkbox.value);
//     }

//     this.updateUrlParams();
//   }

//   updateUrlParams() {
//     const currentParams = new URLSearchParams(window.location.search);
//     if (this.selectedRows.size > 0) {
//       currentParams.set(
//         "selected_rows",
//         Array.from(this.selectedRows).join(","),
//       );
//     } else {
//       currentParams.delete("selected_rows");
//     }

//     const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
//     window.history.replaceState({}, "", newUrl);
//   }

//   handleSort(event) {
//     event.preventDefault();
//     const link = event.currentTarget;
//     const url = new URL(link.href);
//     const currentParams = new URLSearchParams(window.location.search);
//     const newParams = new URLSearchParams(url.search);

//     currentParams.forEach((value, key) => {
//       if (key !== "column" && key !== "direction") {
//         newParams.set(key, value);
//       }
//     });

//     if (this.selectedRows.size > 0) {
//       newParams.set("selected_rows", Array.from(this.selectedRows).join(","));
//     }

//     Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
//       action: "replace",
//     }).then(() => {
//       this.updateCheckboxStates();
//       // this.attachEventListeners(); // Re-attach event listeners
//     });
//   }

//   filter(event) {
//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       // Preserve all existing parameters
//       currentParams.forEach((value, key) => {
//         if (!formData.has(key) && key !== "column" && key !== "direction") {
//           formData.append(key, value);
//         }
//       });

//       // Preserve sort parameters
//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       // Ensure selections are included only once
//       if (this.selectedRows.size > 0) {
//         formData.set("selected_rows", Array.from(this.selectedRows).join(","));
//       }

//       const searchParams = new URLSearchParams(formData);

//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       }).then(() => {
//         this.updateCheckboxStates();
//         // this.attachEventListeners(); // Re-attach event listeners
//       });
//     }, 300);
//   }
// }

// // Claude fix for disabled checkboxes
// //Let's revert back to a working version but clean it up. The issue might be with the Stimulus targets. Let's simplify this and use just the actions:
// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["form"];

//   connect() {
//     this.selectedRows = new Set();

//     // Load existing selections from URL
//     const selectedParam = new URLSearchParams(window.location.search).get(
//       "selected_rows",
//     );
//     if (selectedParam) {
//       selectedParam.split(",").forEach((id) => this.selectedRows.add(id));
//     }

//     this.updateCheckboxStates();

//     // Add sort link handlers
//     document.querySelectorAll(".sort-link").forEach((link) => {
//       link.addEventListener("click", (e) => this.handleSort(e));
//     });
//   }

//   updateCheckboxStates() {
//     document
//       .querySelectorAll('input[name="selected_rows[]"]')
//       .forEach((checkbox) => {
//         checkbox.checked = this.selectedRows.has(checkbox.value);
//       });

//     // Update select-all checkbox state
//     const selectAllCheckbox = document.getElementById("select-all");
//     if (selectAllCheckbox) {
//       const visibleCheckboxes = document.querySelectorAll(
//         'input[name="selected_rows[]"]:not([style*="display: none"])',
//       );
//       selectAllCheckbox.checked =
//         visibleCheckboxes.length > 0 &&
//         Array.from(visibleCheckboxes).every((cb) => cb.checked);
//     }
//   }

//   toggleSelectAll(event) {
//     const isChecked = event.currentTarget.checked;
//     const visibleCheckboxes = document.querySelectorAll(
//       'input[name="selected_rows[]"]:not([style*="display: none"])',
//     );

//     visibleCheckboxes.forEach((checkbox) => {
//       checkbox.checked = isChecked;
//       if (isChecked) {
//         this.selectedRows.add(checkbox.value);
//       } else {
//         this.selectedRows.delete(checkbox.value);
//       }
//     });

//     this.updateUrlParams();
//   }

//   handleRowSelection(event) {
//     const checkbox = event.currentTarget;

//     if (checkbox.checked) {
//       this.selectedRows.add(checkbox.value);
//     } else {
//       this.selectedRows.delete(checkbox.value);
//     }

//     this.updateUrlParams();
//     this.updateCheckboxStates(); // Update select-all state
//   }

//   updateUrlParams() {
//     const currentParams = new URLSearchParams(window.location.search);
//     if (this.selectedRows.size > 0) {
//       currentParams.set(
//         "selected_rows",
//         Array.from(this.selectedRows).join(","),
//       );
//     } else {
//       currentParams.delete("selected_rows");
//     }

//     const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
//     window.history.replaceState({}, "", newUrl);
//   }

//   handleSort(event) {
//     event.preventDefault();
//     const link = event.currentTarget;
//     const url = new URL(link.href);
//     const currentParams = new URLSearchParams(window.location.search);
//     const newParams = new URLSearchParams(url.search);

//     currentParams.forEach((value, key) => {
//       if (key !== "column" && key !== "direction") {
//         newParams.set(key, value);
//       }
//     });

//     if (this.selectedRows.size > 0) {
//       newParams.set("selected_rows", Array.from(this.selectedRows).join(","));
//     }

//     Turbo.visit(`${window.location.pathname}?${newParams.toString()}`, {
//       action: "replace",
//     }).then(() => {
//       this.updateCheckboxStates();
//     });
//   }

//   filter(event) {
//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       const currentParams = new URLSearchParams(window.location.search);
//       const formData = new FormData(event.target.form);

//       currentParams.forEach((value, key) => {
//         if (!formData.has(key) && key !== "column" && key !== "direction") {
//           formData.append(key, value);
//         }
//       });

//       if (currentParams.has("column")) {
//         formData.append("column", currentParams.get("column"));
//         formData.append("direction", currentParams.get("direction"));
//       }

//       if (this.selectedRows.size > 0) {
//         formData.set("selected_rows", Array.from(this.selectedRows).join(","));
//       }

//       const searchParams = new URLSearchParams(formData);

//       Turbo.visit(`${window.location.pathname}?${searchParams.toString()}`, {
//         action: "replace",
//       }).then(() => {
//         this.updateCheckboxStates();
//       });
//     }, 300);
//   }
// }
