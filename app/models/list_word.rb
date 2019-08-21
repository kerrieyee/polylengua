class ListWord < ActiveRecord::Base
  belongs_to :list
  belongs_to :word, polymorphic: true
end
