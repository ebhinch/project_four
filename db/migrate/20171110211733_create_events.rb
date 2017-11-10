class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :date
      t.string :season
      t.string :image
      t.references :town, foreign_key: true

      t.timestamps
    end
  end
end
