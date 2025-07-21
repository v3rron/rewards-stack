class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email, null: false
      t.string :first_name
      t.string :last_name
      t.integer :points, null: false, default: 0

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
