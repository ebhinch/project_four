class Api::EventsController < ApplicationController


    def create
        @event = Event.create(event_params)
        render json: @event
    end

    private
    
        def event_params
            params.require(:event).permit(:name, :date, :season, :image, :town_id)
        end
    
    end
     
