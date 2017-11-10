class Event < ApplicationRecord
  belongs_to :town
  has_many :comments, dependent: :destroy
end
