class DeleteFarmStory < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :farm_story, :text
  end
end
