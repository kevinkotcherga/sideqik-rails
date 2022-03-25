require 'sidekiq'

Rails.application.routes.draw do
  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end

  draw :sidekiq

  get 'endangered/index'
  # La route data est une méthode get qui récupère la donnée.
  get 'endangered/data', to: 'endangered#data'
  # Upload et Destroy sont des méthodes post qui modifent et détruisent la donnée.
  post 'endangered/upload', to: 'endangered#upload'
  post 'endangered/destroy', to: 'endangered#destroy'
  get 'home/index'
  resources :sharks do
    resources :posts
  end
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
