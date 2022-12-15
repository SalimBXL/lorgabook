require "test_helper"

class GroupesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @groupe = groupes(:one)
  end

  test "should get index" do
    get groupes_url, as: :json
    assert_response :success
  end

  test "should create groupe" do
    assert_difference("Groupe.count") do
      post groupes_url, params: { groupe: { description: @groupe.description, name: @groupe.name } }, as: :json
    end

    assert_response :created
  end

  test "should show groupe" do
    get groupe_url(@groupe), as: :json
    assert_response :success
  end

  test "should update groupe" do
    patch groupe_url(@groupe), params: { groupe: { description: @groupe.description, name: @groupe.name } }, as: :json
    assert_response :success
  end

  test "should destroy groupe" do
    assert_difference("Groupe.count", -1) do
      delete groupe_url(@groupe), as: :json
    end

    assert_response :no_content
  end
end
