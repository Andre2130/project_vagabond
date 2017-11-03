class AddSketchPhotoToCity < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :sketch_photo, :string
  end
end
