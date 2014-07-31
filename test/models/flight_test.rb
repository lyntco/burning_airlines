# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string(255)
#  origin        :string(255)
#  destinaton    :string(255)
#  date          :datetime
#  airplane_id   :string(255)
#  created_at    :datetime
#  updated_at    :datetime
#

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
