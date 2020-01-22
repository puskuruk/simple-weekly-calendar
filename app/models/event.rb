class Event < ApplicationRecord
    validates :description, :title, :start, :end, presence: true

    after_create :add_color_to_event

    def add_color_to_event
        random_color = generate_rgb()
        self.update(:color => random_color )
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
