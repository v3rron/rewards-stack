class Product < ApplicationRecord
  validates_presence_of :name, :price, :stock
  validates :price, :stock, numericality: { greater_than_or_equal_to: 0 }

  has_many :redemptions
  has_many :redeeming_users, through: :redemptions, source: :user
end
