class VerbConjugation < ActiveRecord::Base
  FORM_OPTIONS_ARRAY =  ['1s', '2s', '3s', '1p', '2p', '3p']

  TRANSLATION_HASH = {
    '1s' => 'I',
    '2s' => 'You (informal)',
    '3s' => 'He/She/It/You(formal)',
    '1p' => 'We',
    '2p' => 'You all (informal)',
    '3p' => 'They/You all (formal)'
  }

  belongs_to :infinitive
  has_many :study_session_details, as: :word

  def generate_translation(form)
    eng_translation.gsub(/^i/i, TRANSLATION_HASH[form])
  end
end
