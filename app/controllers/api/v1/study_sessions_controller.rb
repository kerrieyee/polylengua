class Api::V1::StudySessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    study_session = GenerateStudySessionService.new(params[:list_id]).call
    render json: StudySession.where(id: study_session.id).includes(study_session_details: :word).last
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

    values = []

    query = "UPDATE study_session_details
             SET result ="

    ActiveRecord::Base.transaction do
      ssd_ids.each do |ssd_id|
        detail = client_details.find{|detail| detail['id'] == ssd_id}
        values << "WHEN #{ssd_id} THEN '#{detail['result']}'"
        if (values.length % 1000).zero?
          ActiveRecord::Base.connection.execute("#{query} (CASE id #{values.join(' ')} END)")
          values = []
        end
      end

      ActiveRecord::Base.connection.execute("#{query} (CASE id #{values.join(' ')} END)")
    end
    study_session.complete! if study_session.may_complete?
  end
end
