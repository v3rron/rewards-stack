# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_07_22_004123) do
  create_table "products", id: { type: :string, limit: 36 }, force: :cascade do |t|
    t.string "name", null: false
    t.integer "price", default: 0, null: false
    t.integer "stock", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "redemptions", id: { type: :string, limit: 36 }, force: :cascade do |t|
    t.string "user_id", null: false
    t.string "product_id", null: false
    t.integer "points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_redemptions_on_product_id"
    t.index ["user_id"], name: "index_redemptions_on_user_id"
  end

  create_table "users", id: { type: :string, limit: 36 }, force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "points", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "redemptions", "products"
  add_foreign_key "redemptions", "users"
end
