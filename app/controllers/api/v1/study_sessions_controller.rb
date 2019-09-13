class Api::V1::StudySessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    study_session = GenerateStudySessionService.new(params[:list_id]).call
    render json: study_session
  end

  def update
    study_session = StudySession.find(params[:id])
    study_session.pause! if params[:session_action] == 'pause' && study_session.may_pause?
    render json: {}, status: 204

  end
end
