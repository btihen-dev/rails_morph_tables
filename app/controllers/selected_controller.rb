class SelectedController < ApplicationController
  before_action :set_character, only: %i[ show edit update destroy ]

  # GET /characters or /characters.json
  def index
    selected_ids = params[:selected_rows]&.map(&:to_i) || []
    @selected_characters = Character.where(id: selected_ids)

    respond_to do |format|
      # format.html # Render the selected.html.erb view
      format.html { render :selected }
      format.json { render json: @characters }
    end
  end
end
