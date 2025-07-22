require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  include FactoryBot::Syntax::Methods
  setup do
    @product = create(:product)
  end

  test "should get index" do
    get api_v1_products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post api_v1_products_url, params: { product: attributes_for(:product) }, as: :json
    end

    assert_response :created
  end

  test "should show product" do
    get api_v1_product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch api_v1_product_url(@product), params: { product: @product }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete api_v1_product_url(@product), as: :json
    end

    assert_response :no_content
  end
end
