require "test_helper"

class ProductTest < ActiveSupport::TestCase
  # Test validations
  test "should not save product without name" do
    product = FactoryBot.build(:product, name: nil)
    assert_not product.valid?
    assert_includes product.errors[:name], "can't be blank"
  end

  test "price must be >= 0" do
    product = FactoryBot.build(:product, price: -10)
    assert_not product.valid?
    assert_includes product.errors[:price], "must be greater than or equal to 0"
  end

  test "stock must be >= 0" do
    product = FactoryBot.build(:product, stock: -5)
    assert_not product.valid?
    assert_includes product.errors[:stock], "must be greater than or equal to 0"
  end

  # Test callback or UUID presence if you have one
  test "should have UUID id after creation" do
    product = FactoryBot.create(:product)
    assert_match(/\A[0-9a-f\-]{36}\z/, product.id)
  end
end
