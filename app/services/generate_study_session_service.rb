class GenerateStudySessionService
  attr_reader :list

  def initialize(list_id)
    raise 'you must have a list_id' unless list_id.present?
    @list = List.find(list_id)
    @verb_conjugations = @list.verb_conjugations
    @nouns = @list.nouns
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
    #TODO allow configuration to choose how long session is and update accordingly
    words = words_to_study_again.shuffle.first(5) + new_words_to_study.shuffle.first(5)

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

  def format_nouns(nouns)
    nouns.map do |noun|
      {type_id: noun.id, type: noun.class}
    end
  end


  def format_verb_conjugations(verb_conjugations, preloaded = false)
    return [] unless verb_conjugations.present?
    verb_conjugations.map do |vc|
      ssds = vc.study_session_details
      form = preloaded ? ssds.last.form : VerbConjugation::FORM_OPTIONS_ARRAY.sample
      {type_id: vc.id, type: vc.class, form: form}
    end
  end

  def new_words_to_study
    vcs = @verb_conjugations.where(not_exist_query('VerbConjugation'))
    nouns = @nouns.where(not_exist_query('Noun'))

    format_verb_conjugations(vcs) + format_nouns(nouns)
  end

  def words_to_study_again
    vcs = @verb_conjugations.includes(:study_session_details).where(study_again_query('VerbConjugation'))
    nouns = @nouns.where(study_again_query('Noun'))
    format_verb_conjugations(vcs, preloaded = true) + format_nouns(nouns)
  end

  def study_again_query(model)
    return "" unless model
    #looks at most recent result for the VC and sees if it was incorrect
    "(SELECT ssd.result
     FROM study_session_details ssd
     WHERE ssd.word_id = #{model.tableize}.id
     AND ssd.word_type = '#{model}'
     ORDER BY ssd.id DESC LIMIT 1) = 'incorrect'"
  end

  def not_exist_query(model)
    return "" unless model
    "NOT EXISTS (SELECT ssd.id
     FROM study_session_details ssd
     WHERE ssd.word_id = #{model.tableize}.id
     AND ssd.word_type = '#{model}' LIMIT 1)"
  end
end
