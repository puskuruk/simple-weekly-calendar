require 'test_helper'

class Api::V1::EventsControllerTest < ActionDispatch::IntegrationTest
  test "get /api/v1/events for /api/v1/events#index" do
    get '/api/v1/events'
    assert_response :success
  end

  test "get /api/v1/events for /api/v1/events#create with empty parameters" do
    new_event = {
      event: {
        start: nil,
        end: nil,
        description: nil,
        title: nil
      }
    }
    post "/api/v1/events", params: new_event
    assert_response :unprocessable_entity
  end

  test "get /api/v1/events for /api/v1/events#create properly" do
    new_event = {
      event: {
        start: Time.now,
        end: Time.now,
        description: "not nil",
        title: "not nil"
      }
    }
    post "/api/v1/events", params: new_event
    assert_response :success
  end
end
