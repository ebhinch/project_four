class Api::TownsController < ApplicationController
    def index
        @towns = Town.all

        render json: @towns
    end


    def show
        town_id = params[:id]
        @town = Town.find_by_id(town_id)
        render json: @town, include: [:events]
    end

    
end

