class Event < ApplicationRecord
    validates :description, :title, :start, :end, presence: true

    after_create :add_color_to_event



    def add_color_to_event
        random_color = generate_rgb()
        self.update(:color => random_color )
    end

    def self.events_in_week(current_date)
        current_date = Date.parse(current_date) rescue nil
        if current_date != nil
            events = Array.new
            sunday = current_date.days_ago(current_date.wday)

            events = Event.where(start: current_date.beginning_of_week..current_date.end_of_week)
        else
            events = nil
        end
    end

    private
    
    def generate_rgb
        color_array = Array.new
        3.times do
            random_color = rand(0..255)
            color_array.push(random_color)
        end
        "rgb(#{color_array[0]},#{color_array[1]},#{color_array[2]})"
    end
end
