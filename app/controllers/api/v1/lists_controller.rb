class Api::V1::ListsController < ApplicationController
  def index
    render json: List.all
  end

  def show
    list = List.find(params[:id])
    render json: list
  end
end
