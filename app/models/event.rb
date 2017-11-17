class Event < ApplicationRecord
  belongs_to :town
  has_many :comments, dependent: :destroy
  # has_many :users, through: :comments
  validates :name, presence: :true
  validates :date, presence: :true
  validates :season, presence: :true
  validates :image, presence: :true
end
