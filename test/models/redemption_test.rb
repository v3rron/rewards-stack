require "test_helper"

class RedemptionTest < ActiveSupport::TestCase
  include FactoryBot::Syntax::Methods
  test "successful redemption deducts product stock and user points" do
    user = create(:user, points: 500)
    product = create(:product, stock: 5, price: 100)
    create(:redemption, user: user, product: product, points: product.price)

    user.reload
    product.reload

    assert_equal 400, user.points
    assert_equal 4, product.stock
  end
end
