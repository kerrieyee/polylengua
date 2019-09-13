class StudySession < ActiveRecord::Base
  include AASM

  has_many :study_session_details
  belongs_to :list

  aasm column: 'state' do
    state :pending, initial: true
    state :in_progress, after_enter: :log_timestamp
    state :paused
    state :completed, after_enter: :log_timestamp

    event :start do
      transitions from: [:pending, :paused], to: :in_progress
    end

    event :pause do
      transitions from: :in_progress, to: :paused
    end

    event :complete do
      transitions from: :in_progress, to: :completed, guard: :details_completed?
    end
  end

  scope :non_completed, -> { where.not(state: 'completed') }

  private

  def details_completed?
    study_session_details.all?{ |ssd| ssd.result.present? }
  end

  def log_timestamp
    field = "#{state}_at"
    touch(field) if has_attribute?(field)
  end
end
