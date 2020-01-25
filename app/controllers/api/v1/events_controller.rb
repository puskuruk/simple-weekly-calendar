class Api::V1::EventsController < ApplicationController
    # GET api/v1/events
    def index
        @events = Event.all
        render json: @events
    end

    # POST api/v1/events
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

    # DELETE /events/1
    def destroy
      @event = Event.find(params[:id])
      @event.destroy
    end

    # POST api/v1/search
    def search_events_in_week
      first_day = params[:event][:date]
      @events_in_week = Event.events_in_week(first_day)
      
      if @events_in_week != nil 
        render json: {
          status: 200,
          events: @events_in_week
        },
        status: :created
      else
        render json: {
          status: 422,
          events: @events_in_week
        }        
      end
    end

    private

    def event_params
      params.require(:event).permit(:description, :title, :start, :end)
    end
end
