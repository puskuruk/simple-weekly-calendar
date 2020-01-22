class Api::V1::EventsController < ApplicationController
    # GET /events
    def index
        @events = Event.all
        render json: @events
    end

    # POST /events
    def create
        @event = Event.new(event_params)
    
        if @event.save
          render json: {
              event: @event,
              status: 200
            },
            status: :created
        else
          render json: {
              event: @event.errors,
              status: 422
            },
            status: :unprocessable_entity
        end
    end

    private

    def event_params
      params.require(:event).permit(:description, :title, :start, :end)
    end
end
