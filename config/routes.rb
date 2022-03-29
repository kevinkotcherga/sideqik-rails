Rails.application.routes.draw do
  get '/endangered/index'
  get '/endangered/download_csv'
  get '/memory/download_csv'
  get :search, controller: :main
end
