class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :stars, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.integer :product_id, null: false, index: true
      t.timestamps
    end
  end
end
