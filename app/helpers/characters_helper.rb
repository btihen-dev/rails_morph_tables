module CharactersHelper
  def sort_link(column:, label:, company_filter:)
    direction = column == params[:column] ? future_direction : 'asc'
    link_to(
      "#{label} #{sort_arrow_for(column)}".html_safe,
      characters_path(column:, direction:, company_filter:),
      data: { turbo_action: 'replace' }
    )
  end

  def future_direction = params[:direction] == 'asc' ? 'desc' : 'asc'

  def sort_arrow
    case params[:direction]
    when 'asc' then tag.i(class: "bi bi-arrow-up")
    when 'desc' then tag.i(class: "bi bi-arrow-down")
    else tag.i(class: "bi bi-arrow-down-up")
    end
  end

  def sort_arrow_for(column)
    params[:column] == column ? sort_arrow : tag.i(class: "bi bi-arrow-down-up")
  end
end
