class Api::TownsController < ApplicationController
    def index
        @towns = Town.all

        render json: @towns
    end


    
end

