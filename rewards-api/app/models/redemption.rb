class Redemption < ApplicationRecord
  belongs_to :user
  belongs_to :product

  before_validation :set_points_from_product_price

  validates :points, numericality: { greater_than: 0 }
  validate :user_has_enough_points
  validate :product_in_stock

  around_create :deduct_points_and_stock

  private

  def set_points_from_product_price
    self.points = product.price
  end

  def user_has_enough_points
    if user.points < points
      errors.add(:user, "doesn't have enough points")
    end
  end

  def product_in_stock
    if product.stock <= 0
      errors.add(:product, "is out of stock")
    end
  end

  def deduct_points_and_stock
    ApplicationRecord.transaction do
      yield
      user.update!(points: user.points - points)
      product.update!(stock: product.stock - 1)
    end
  end
end
