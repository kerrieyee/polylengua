class ChangeTypeColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :list_words, :type, :word_type
    rename_column :list_words, :type_id, :word_id
  end
end
