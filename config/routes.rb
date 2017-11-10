Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do 
    get "/towns", to: "towns#index", as: "towns"
  end
end


