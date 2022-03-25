class DeleteRoastLevel < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :roast_level
  end
end
