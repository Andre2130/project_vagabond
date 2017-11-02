class Api::PostsController < ApplicationController

    def index
        @posts = City.find(params[:city_id]).posts
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def create
    end

    def update
    end

    def destroy
    end

end
