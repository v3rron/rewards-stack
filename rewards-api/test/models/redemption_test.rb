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

  test "redemption rollback on transaction error" do
    user = create(:user, points: 200)
    product = create(:product, stock: 1, price: 300)
    redemption = build(:redemption, user: user, product: product, points: product.price)
    saved = redemption.save

    assert_not saved
    assert_not redemption.persisted?
    assert_includes redemption.errors[:user], "doesn't have enough points"

    user.reload
    product.reload

    assert_equal 200, user.points
    assert_equal 1, product.stock
  end
end
