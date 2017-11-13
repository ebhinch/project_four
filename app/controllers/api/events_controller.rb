class Api::EventsController < ApplicationController
    
        def index
            @events = Event.all
    
            render json: @events
        end
    
    
        def show
            event_id = params[:id]
            @event = Event.find_by_id(event_id)
            render json: @event, include: [:comments]
        end
    
        
        def create
            @event = Event.create(event_params)
            render json: @event
        end

        def update
            @event = Event.find(params[:id])
            @event.update!(event_params)
            render json: @event
        end

        def destroy
            @event = Event.find(params[:id]).destroy
            @events = Town.find(params[:town_id]).events
            render json: @events
        end
    
    
        private
        
            def event_params
                params.require(:event).permit(:name, :date, :season, :image, :town_id)
            end
        
        end
         
    