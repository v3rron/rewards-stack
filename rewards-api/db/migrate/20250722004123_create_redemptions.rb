class CreateRedemptions < ActiveRecord::Migration[8.0]
  def change
    create_table :redemptions, id: :string, limit: 36 do |t|
      t.references :user, null: false, foreign_key: true, type: :string
      t.references :product, null: false, foreign_key: true, type: :string
      t.integer :points

      t.timestamps
    end
  end
end
