class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false, index: true
      t.boolean :dislike, null: false
      t.timestamps
    end
    add_index :likes, [:user_id, :review_id], unique: true
  end
end
