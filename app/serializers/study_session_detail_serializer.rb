class StudySessionDetailSerializer < ActiveModel::Serializer
  attributes :result, :form, :word_type, :word_id, :word, :translation, :mood, :tense

  def word
    if object.word_type == 'Noun'
      object.word.word
    elsif object.word_type == 'VerbConjugation'
      object.word.send("form_#{object.form}")
    end
  end

  def translation
    if object.word_type== 'Noun'
      object.word.eng_translation
    elsif object.word_type== 'VerbConjugation'
      object.word.generate_translation(object.form)
    end
  end

  def gender
    return unless object.word_type== 'Noun'
    object.word.gender
  end

  def mood
    return unless object.word_type== 'VerbConjugation'
    object.word.mood
  end

  def tense
    return unless object.word_type== 'VerbConjugation'
    object.word.tense
  end
end
