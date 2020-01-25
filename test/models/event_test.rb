require 'test_helper'

class EventTest < ActiveSupport::TestCase
  test 'respond to blank values of description, title, start, end' do
    keys_array = ["description", "title", "start", "end"]
    4.times do |time|
      event = {}
      keys_array.each_with_index do |key, index|
        index != time ? event["#{key}"] = "not blank" : event["#{key}"] = nil
      end
      new_event = Event.create(event)
      refute new_event.valid?, 'Checking creating new event with making one field empty and every value is string'
      assert_not_nil new_event.errors
    end
  end


  test 'Create new event' do
    new_event = Event.create(
      start: Time.now,
      end: Time.now,
      description: 'not blank',
      title: 'not vlank'
    )
    assert new_event.valid?
  end

  test 'Checking type of start field' do
    new_event = Event.create(
      start: "not nil",
      end: Time.now,
      description: 'not blank',
      title: 'not vlank'
    )
    refute new_event.valid?
  end

  test 'checking creating automatically color for new event' do
    new_event = Event.create(
      start: Time.now,
      end: Time.now,
      description: 'not blank',
      title: 'not vlank'
    )
    refute new_event.color.nil?
  end
end
