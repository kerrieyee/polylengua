# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_11_222510) do

  create_table "infinitives", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "word", null: false, collation: "utf8_bin"
    t.string "eng_translation"
    t.string "past_participle", collation: "utf8_bin"
    t.string "present_participle", collation: "utf8_bin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["word"], name: "index_infinitives_on_word", unique: true
  end

  create_table "list_words", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "list_id", null: false
    t.integer "type_id", null: false
    t.string "type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id", "type", "type_id"], name: "index_list_words_on_list_id_and_type_and_type_id", unique: true
    t.index ["type", "type_id"], name: "index_list_words_on_type_and_type_id"
  end

  create_table "lists", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nouns", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "word", null: false, collation: "utf8_bin"
    t.string "gender"
    t.string "eng_translation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["word"], name: "index_nouns_on_word", unique: true
  end

  create_table "verb_conjugations", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "infinitive_id", null: false
    t.string "mood", null: false, collation: "utf8_bin"
    t.string "tense", null: false, collation: "utf8_bin"
    t.text "eng_translation"
    t.string "form_1s", collation: "utf8_bin"
    t.string "form_2s", collation: "utf8_bin"
    t.string "form_3s", collation: "utf8_bin"
    t.string "form_1p", collation: "utf8_bin"
    t.string "form_2p", collation: "utf8_bin"
    t.string "form_3p", collation: "utf8_bin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["infinitive_id", "mood", "tense"], name: "index_verb_conjugations_on_infinitive_id_and_mood_and_tense", unique: true
  end

  create_table "verbs", id: :integer, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "infinitive", null: false
    t.string "mood", null: false
    t.string "tense", null: false
    t.string "verb_english"
    t.string "form_1s"
    t.string "form_2s"
    t.string "form_3s"
    t.string "form_1p"
    t.string "form_2p"
    t.string "form_3p"
  end

end
