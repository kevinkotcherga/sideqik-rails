Rails.application.routes.draw do
  get '/endangered/index'
  get '/memory/download_csv'
  get :search, controller: :main
end
