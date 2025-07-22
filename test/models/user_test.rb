require "test_helper"

class UserTest < ActiveSupport::TestCase
  include FactoryBot::Syntax::Methods
  # Test validations
  test "email must be present" do
    user = User.new(email: nil)
    assert_not user.valid?
    assert_includes user.errors[:email], "can't be blank"
  end

  test "points must be >= 0" do
    user = User.new(points: -10)
    assert_not user.valid?
    assert_includes user.errors[:points], "must be greater than or equal to 0"
  end

  # test callbacks
  test "should have UUID id after creation" do
    user = create(:user)
    assert_match(/\A[0-9a-f\-]{36}\z/, user.id)
  end
end
