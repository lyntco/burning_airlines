# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string(255)
#  origin        :string(255)
#  destination   :string(255)
#  date          :datetime
#  airplane_id   :string(255)
#  created_at    :datetime
#  updated_at    :datetime
#

class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations
end
