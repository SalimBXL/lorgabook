class Api::V1::GroupesController < ApplicationController
  before_action :set_groupe, only: %i[ show update destroy ]

  # GET /groupes
  def index
    @groupes = Groupe.all

    render json: @groupes
  end

  # GET /groupes/1
  def show
    render json: @groupe
  end

  # POST /groupes
  def create
    @groupe = Groupe.new(groupe_params)

    if @groupe.save
      render json: @groupe, status: :created, location: @groupe
    else
      render json: @groupe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groupes/1
  def update
    if @groupe.update(groupe_params)
      render json: @groupe
    else
      render json: @groupe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groupes/1
  def destroy
    @groupe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_groupe
      @groupe = Groupe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def groupe_params
      params.require(:groupe).permit(:name, :description)
    end
end
