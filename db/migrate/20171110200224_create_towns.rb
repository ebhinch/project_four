class CreateTowns < ActiveRecord::Migration[5.1]
  def change
    create_table :towns do |t|
      t.string :name
      t.string :description
      t.string :image
      t.float :lat
      t.float :lng
      t.integer :population

      t.timestamps
    end
  end
end
