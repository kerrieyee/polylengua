class StudySessionSerializer < ActiveModel::Serializer
  attributes :id, :state

  has_many :study_session_details, serializer: StudySessionDetailSerializer
end
