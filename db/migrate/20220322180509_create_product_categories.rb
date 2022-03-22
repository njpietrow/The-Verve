class CreateProductCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :product_categories do |t|
      t.integer :product_id, null: false, index: true
      t.integer :category_id, null: false, index: true 
      t.timestamps
    end
  end
end
