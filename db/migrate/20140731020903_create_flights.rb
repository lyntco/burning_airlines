class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :origin
      t.string :destinaton
      t.datetime :date
      t.string :airplane_id

      t.timestamps
    end
  end
end
