Rails.application.routes.draw do
  get 'endangered/index'
  get '/endangered/upload'
  # La route data est une méthode get qui récupère la donnée.
  get 'endangered/data', to: 'endangered#data'
  # Upload et Destroy sont des méthodes post qui modifent et détruisent la donnée.
  post 'endangered/upload', to: 'endangered#upload'
  post 'endangered/destroy', to: 'endangered#destroy'
  get 'home/index'
  resources :sharks do
    resources :posts
  end
  root 'endangered#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
