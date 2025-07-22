require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  include FactoryBot::Syntax::Methods
  setup do
    @user = create(:user)
  end

  test "should get index" do
    get api_v1_users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference("User.count") do
      post api_v1_users_url, params: { user: attributes_for(:user) }, as: :json
      puts @user.errors.full_messages
    end

    assert_response :created
  end

  test "should show user" do
    get api_v1_user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch api_v1_user_url(@user), params: { user: @user }, as: :json
    assert_response :success
  end

  test "should destroy user" do
    assert_difference("User.count", -1) do
      delete api_v1_user_url(@user), as: :json
    end

    assert_response :no_content
  end
end
