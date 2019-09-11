class StudySession < ActiveRecord::Base
  include AASM

  has_many :study_session_details
  belongs_to :list
end
