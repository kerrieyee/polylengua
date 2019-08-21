class Infinitive < ActiveRecord::Base
  has_many :verb_conjugations
  has_many :list_words, as: :word
end
