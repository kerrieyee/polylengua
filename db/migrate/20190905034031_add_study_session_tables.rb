class AddStudySessionTables < ActiveRecord::Migration[5.2]
  def change
    create_table :study_sessions do |t|
      t.string :state
      t.datetime :in_progress_at
      t.datetime :completed_at
      t.references :list

      t.timestamps
    end

    create_table :study_session_details do |t|
      t.references :study_session
      t.string :word_type, null: false
      t.integer :word_type_id, null: false
      t.string :result
      t.string :form

      t.timestamps
    end
  end
end
