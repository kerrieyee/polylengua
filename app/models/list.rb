class List < ActiveRecord::Base
  has_many :list_words
  has_many :infinitives, through: :list_words, source: :word, source_type: "Infinitive"
  has_many :nouns, through: :list_words, source: :word, source_type: "Noun"
  has_many :verb_conjugations, through: :infinitives
end
