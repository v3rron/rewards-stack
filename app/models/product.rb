class Product < ApplicationRecord
  include UuidPrimaryKey

  validates_presence_of :name, :price, :stock
  validates :price, :stock, numericality: { greater_or_equal_to: 0 }
end
