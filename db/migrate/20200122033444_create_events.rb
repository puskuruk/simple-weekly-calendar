class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.datetime :start
      t.datetime :end
      t.string :description
      t.string :title
      t.string :color

      t.timestamps
    end
  end
end
