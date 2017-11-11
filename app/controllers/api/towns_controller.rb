class Api::TownsController < ApplicationController
    def index
        @towns = Town.all

        render json: @towns
    end


    def show
        @town = Town.find_by_id(params[:id])
        render json: @town, include: [:events]
    end

    
end

