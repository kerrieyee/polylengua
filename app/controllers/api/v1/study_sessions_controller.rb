class Api::V1::StudySessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    words = GenerateStudySessionService.new(params[:list_id]).call
    render json: words
  end
end
