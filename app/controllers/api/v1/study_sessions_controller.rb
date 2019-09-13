class Api::V1::StudySessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    study_session = GenerateStudySessionService.new(params[:list_id]).call
    render json: study_session
  end

  def update
    study_session = StudySession.find(params[:id])
    study_session.pause! if params[:session_action] == 'pause' && study_session.may_pause?
    handle_complete(study_session) if params[:session_action] == 'complete'
    render json: {}, status: 204
  end

  private

  def handle_complete(study_session)
    client_details = params[:study_session_details]
    ssd_ids = client_details.map{|detail| detail['id']}
    ssds = StudySessionDetail.where(id: ssd_ids)
    ActiveRecord::Base.transaction do
      ssds.each do |ssd|
        detail = client_details.find{|detail| detail['id'] == ssd.id}
        ssd.result = detail['result']
        ssd.save!
      end
    end
    study_session.complete! if study_session.may_complete?
  end
end
