Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do 
    resources :towns, only: [:index, :show] do
      resources :events, only: [:index, :show, :create] do
        resources :comments, only: [:create, :update, :destroy, :show, :index]
      end
    end 
  end
end


