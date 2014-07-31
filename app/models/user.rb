# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  password_digest :string(255)
#  name            :string(255)
#  email           :string(255)
#  is_admin?       :boolean
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
end
