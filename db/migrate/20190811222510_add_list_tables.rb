class AddListTables < ActiveRecord::Migration[5.2]
  #https://stackoverflow.com/questions/10929836/utf8-bin-vs-utf-unicode-ci
  def change
    create_table :lists do |t|
      t.string :name, null: false
      t.text :description

      t.timestamps
    end

    create_table :list_words do |t|
      t.integer :list_id, null: false
      t.integer :type_id, null: false
      t.string  :type, null: false
      t.timestamps
      t.index [:list_id, :type, :type_id], unique: true
      t.index [:type, :type_id]
    end

    create_table :nouns do |t|
      t.string :word, null: false, collation: 'utf8_bin'
      t.string :gender
      t.string :eng_translation, null: false
      t.timestamps
      t.index :word, unique: true
    end

    create_table :infinitives do |t|
      t.string :word, null: false, collation: 'utf8_bin'
      t.string :eng_translation
      t.string :past_participle, collation: 'utf8_bin'
      t.string :present_participle, collation: 'utf8_bin'
      t.timestamps
      t.index :word, unique: true
    end

    create_table :verb_conjugations do |t|
      t.integer :infinitive_id, null: false
      t.string :mood, null: false, collation: 'utf8_bin'
      t.string :tense, null: false, collation: 'utf8_bin'
      t.text :eng_translation
      t.string :form_1s, collation: 'utf8_bin'
      t.string :form_2s, collation: 'utf8_bin'
      t.string :form_3s, collation: 'utf8_bin'
      t.string :form_1p, collation: 'utf8_bin'
      t.string :form_2p, collation: 'utf8_bin'
      t.string :form_3p, collation: 'utf8_bin'
      t.timestamps
      t.index [:infinitive_id, :mood, :tense], unique: true
    end
  end
end
