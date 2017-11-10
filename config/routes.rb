Rails.application.routes.draw do
  namespace :api do 
    get "/towns", to: "towns#index", as: "towns"
  end
end


