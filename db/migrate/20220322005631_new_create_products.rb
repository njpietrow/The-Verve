class NewCreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.string :ingredients, null: false
      t.string :bag_size, null: false
      t.string :grind, null: false
      t.text :description, null: false
      t.integer :roast_level, null: false
      t.text :farm_story, null: false
      t.string :location, null: false
      t.decimal :price, null: false, precision: 10, scale: 3
      t.timestamps
    end
  end
end
