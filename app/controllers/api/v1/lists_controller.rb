class Api::V1::ListsController < ApplicationController
  respond_to :json

  def index
    render json: List.all
  end
end
