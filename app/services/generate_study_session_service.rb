class GenerateStudySessionService
  attr_reader :list

  def initialize(list_id)
    raise 'you must have a list_id' unless list_id.present?
    @list = List.find(list_id)
  end

  def call
    @ss = StudySession.non_completed.where(list_id: list.id).last
    if !@ss
      ActiveRecord::Base.transaction do
        @ss = StudySession.pending.where(list_id: list.id).first_or_create
        create_details(@ss)
      end
    end
    @ss.start! if @ss.may_start?
    @ss
  end

  private

  def create_details(ss)
    #TODO allow configuration to choose how long session is
    words = (format_nouns + format_verb_conjugations).shuffle.first(20)
    query = "INSERT INTO `study_session_details` (`study_session_id`,`word_type`, `word_id`, `form`, `created_at`, `updated_at`)"
    values = []

    words.each do |word|
      values << "(#{ss.id}, '#{word[:type]}', #{word[:type_id]}, '#{word[:form]}', NOW(), NOW())"
      if (values.length % 1000).zero?
        ActiveRecord::Base.connection.execute("#{query} VALUES #{values.join(',')}")
        values = []
      end

      # I would prefer to do something this for readability/making sure data isn't duplicated if clear db didn't have a 3200 query limit/hour
      # ssd = StudySessionDetail.where(study_session_id: ss.id, word_type: word[:type], word_id: word[:type_id]).first_or_create do |detail|
      #   detail.form = word[:form] if word[:form].present?
      # end
    end
    ActiveRecord::Base.connection.execute("#{query} VALUES #{values.join(',')}")
    words
  end

  def format_nouns
    list.nouns.map do |noun|
      {type_id: noun.id, type: noun.class}
    end
  end


  def format_verb_conjugations
    list.verb_conjugations.map do |vc|
      form = VerbConjugation::FORM_OPTIONS_ARRAY.sample
      {type_id: vc.id, type: vc.class, form: form}
    end
  end
end
