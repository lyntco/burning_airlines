class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :origin
      t.string :destinaton
      t.string :date
      t.string :plane_id

      t.timestamps
    end
  end
end
