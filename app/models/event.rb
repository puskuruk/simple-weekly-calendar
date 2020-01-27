class Event < ApplicationRecord
    validates :description, :title, :start, :end, presence: true

    after_create :add_color_to_event

    def self.events_in_week(current_date)
        parsed_current_date = Date.parse(current_date) rescue nil
        unless current_date == nil
            # https://github.com/rubocop-hq/ruby-style-guide#literal-array-hash
            events = []

            events = Event.where(start: parsed_current_date.beginning_of_week..parsed_current_date.end_of_week)
        else
            events = nil
        end
    end

    private

    def add_color_to_event
        random_color = generate_rgb()
        self.update(:color => random_color )
    end
    
    def generate_rgb
        color_array = Array.new
        3.times do
            random_color = rand(0..255)
            color_array.push(random_color)
        end
        "rgb(#{color_array[0]},#{color_array[1]},#{color_array[2]})"
    end
end
