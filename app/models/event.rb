class Event < ApplicationRecord
  belongs_to :town
  has_many :comments, dependent: :destroy
  # has_many :users, through: :comments
end
