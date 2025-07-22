class User < ApplicationRecord
  validates_presence_of :email, :points
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :points, numericality: { greater_than_or_equal_to: 0 }

  has_many :redemptions
  has_many :redeemed_products, through: :redemptions, source: :product
end
