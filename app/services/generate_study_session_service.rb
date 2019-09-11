class GenerateStudySessionService
  attr_reader :list

  def initialize(list_id)
    raise 'you must have a list_id' unless list_id.present?
    @list = List.find(list_id)
  end

  def call
    #TODO: get it to return existing list if possible
    raise 'finish the first session to create a second' if StudySession.non_completed.where(list_id: list.id).exists?
    ActiveRecord::Base.transaction do
      @ss = StudySession.pending.where(list_id: list.id).first_or_create
      @words = create_details(@ss)
    end
    @ss.start!
  end

  private

  def create_details(ss)
    words = (format_nouns + format_verb_conjugations).shuffle.first(50)
    words.each do |word|
      ssd = StudySessionDetail.where(study_session_id: ss.id, word_type: word[:type], word_type_id: word[:type_id]).first_or_create do |detail|
        detail.form = word[:form] if word[:form].present?
      end
    end
    words
  end

  def format_nouns
    list.nouns.map do |noun|
      {type_id: noun.id, type: noun.class, word: noun.word, translation: noun.eng_translation, gender: noun.gender, result: ''}
    end
  end


  def format_verb_conjugations
    list.verb_conjugations.map do |vc|
      form = VerbConjugation::FORM_OPTIONS_ARRAY.sample
      {type_id: vc.id, type: vc.class, word: vc.send("form_#{form}"), translation: vc.generate_translation(form), form: form, mood: vc.mood, tense: vc.tense, result: ''}
    end
  end
end
