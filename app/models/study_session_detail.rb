class StudySessionDetail < ActiveRecord::Base
  belongs_to :study_session
  belongs_to :word, polymorphic: true
end
