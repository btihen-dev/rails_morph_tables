class CharactersController < ApplicationController
  before_action :set_character, only: %i[ show edit update destroy ]

  # GET /characters or /characters.json
  def index
    @selected_rows = params[:selected_rows]&.split(',')&.map(&:to_i) || []

    query = Character
            .includes(:species)
            .includes(character_jobs: { job: :company })

    # sort column and direction if present
    # query = query.order("#{params[:column]} #{params[:direction]}") if params[:column].present?
    if params[:column].present?
      query = case params[:column]
              when 'companies.company_name'
                # need to group attributes to include in the view
                query.group(
                        'characters.id',
                        'species.id',
                        'species.species_name',
                        'character_jobs.id',
                        'jobs.id',
                        'companies.id',
                        # 'character_jobs.start_date',
                        # 'character_jobs.end_date',
                        # 'jobs.role',
                        'companies.company_name'
                      )
                      .order("MIN(companies.company_name) #{params[:direction]}")
              else
                query.order("#{params[:column]} #{params[:direction]}")
              end
    end

    # Dropdown selections
    @gender_selection = params[:gender_selection]
    @species_selection = params[:species_selection]

    query = query.where(gender: @gender_selection) if @gender_selection.present?
    query = query.where(species_id: @species_selection) if @species_selection.present?

    # filters
    @company_filter = params[:company_filter]
    @lastname_filter = params[:lastname_filter]
    @firstname_filter = params[:firstname_filter]
    query = query.where('characters.last_name ilike ?', "%#{@lastname_filter}%") if @lastname_filter.present?
    query = query.where('characters.first_name ilike ?', "%#{@firstname_filter}%") if @firstname_filter.present?
    if @company_filter.present?
      query = query
              .joins(character_jobs: { job: :company })
              .where('companies.company_name ilike ?', "%#{@company_filter}%")
    end

    # execute query
    @characters = query.all
  end

  def selected
    @selected = Character.includes(:species)
                        .includes(character_jobs: { job: :company })
                        .where(id: params[:selected_rows])

    respond_to do |format|
      format.html { render :selected }
      # format.turbo_stream do
      #   # Force a redirect to a full page
      #   redirect_to selected_characters_path(selected_rows: params[:selected_rows])
      # end
      format.json { render json: @selected }
    end
  end

  # GET /characters/1 or /characters/1.json
  def show
  end

  # GET /characters/new
  def new
    @character = Character.new
  end

  # GET /characters/1/edit
  def edit
  end

  # POST /characters or /characters.json
  def create
    @character = Character.new(character_params)

    respond_to do |format|
      if @character.save
        format.html { redirect_to character_url(@character), notice: "Character was successfully created." }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /characters/1 or /characters/1.json
  def update
    respond_to do |format|
      if @character.update(character_params)
        format.html { redirect_to character_url(@character), notice: "Character was successfully updated." }
        format.json { render :show, status: :ok, location: @character }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /characters/1 or /characters/1.json
  def destroy
    @character.destroy!

    respond_to do |format|
      format.html { redirect_to characters_url, notice: "Character was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.require(:character).permit(:nick_name, :first_name, :last_name, :given_name, :gender, :species_id)
    end
end
