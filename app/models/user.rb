class User < ApplicationRecord
  include UuidPrimaryKey

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: true
  validates :points, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
