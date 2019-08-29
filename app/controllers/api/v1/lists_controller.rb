class Api::V1::ListsController < ApplicationController
  respond_to :json

  def index
    render json: List.all
  end

  def show
    list = List.find(params[:id])
    render json: list
  end
end
