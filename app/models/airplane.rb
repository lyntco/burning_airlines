# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  rows       :integer
#  cols       :integer
#  created_at :datetime
#  updated_at :datetime
#

class Airplane < ActiveRecord::Base
end
