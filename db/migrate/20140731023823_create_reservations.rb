class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :flight_id
      t.integer :user_id
      t.string :row
      t.integer :col

      t.timestamps
    end
  end
end
