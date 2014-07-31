# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string(255)
#  origin        :string(255)
#  destinaton    :string(255)
#  date          :string(255)
#  plane_id      :string(255)
#  created_at    :datetime
#  updated_at    :datetime
#

class Flight < ActiveRecord::Base
end
