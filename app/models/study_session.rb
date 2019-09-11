class StudySession < ActiveRecord::Base
  has_many :study_session_details
  belongs_to :list
end
