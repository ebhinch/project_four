class Api::CommentsController < ApplicationController
    before_action :authenticate_user!, :except => [:index]

    def index
        @comments = Comment.all

        render json: @comments
    end



    def create
        @user = current_user
        @event = Event.find(params[:id])

        @comment = @user.comments.build(comment_params)
        @comment.event = @event

        if @user.save
            render json: @comment, status: created, location: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
end


    def create
        @user = current_user
        @town = Town.find(params[:id])
        @comment = Comment.new(comment_params)
        @town.comments << @comment
        @town.save!
        render json: @comment

    end


    private
        def comment_params
            params require(:comment).permit(:title, :text)
        end

end


