require "test_helper"

class RedemptionsControllerTest < ActionDispatch::IntegrationTest
  include FactoryBot::Syntax::Methods
  setup do
    user = create(:user, points: 200)
    product = create(:product, price: 100, stock: 1)
    @redemption = create(:redemption, user_id: user.id, product_id: product.id)
  end

  test "should get index" do
    get api_v1_redemptions_url(params: { user_id: User.first.id }), as: :json
    assert_response :success
  end

  test "should show redemption" do
    get api_v1_redemption_url(@redemption), as: :json
    assert_response :success
  end

  test "should create redemption if user has enough points" do
    user = create(:user, points: 500)
    product = create(:product, price: 499, stock: 1)
    params = { redemption: { user_id: user.id, product_id: product.id } }

    post api_v1_redemptions_url, params: params, as: :json
    assert_response :created
    user.reload
    assert_equal 1, user.points
  end

  test "should not create redemption if insufficient points" do
    user = create(:user, points: 100)
    product = create(:product, price: 101)
    params = { redemption: { user_id: user.id, product_id: product.id } }

    post api_v1_redemptions_url, params: params, as: :json
    assert_response :unprocessable_entity
    assert_includes JSON.parse(response.body)["errors"], "User doesn't have enough points"
  end
end
