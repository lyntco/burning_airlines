# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Flight.destroy_all
Airplane.destroy_all
Reservation.destroy_all


u1 = User.create(:username => 'lynt', :password => 'chicken', :password_confirmation => 'chicken', :email => 'strawww@gmail.com', :name => 'Larlyn', :is_admin? => true)

a1 = Airplane.create(:name => 'Burn baby burn', :rows => 4, :cols => 20)

f1 = Flight.create(:flight_number => "707", :origin => 'SYD', :destination => 'HELL', :date => '13/4/13')

f1.airplane = a1
f1.save

r1 = Reservation.new

r1.user = u1
r1.flight = f1
r1.save