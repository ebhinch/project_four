Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do 
    resources :towns, only: [:index, :show] do
      resources :events do
        resources :comments
      end
    end 
  end
end


