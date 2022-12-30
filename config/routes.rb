Rails.application.routes.draw do
  
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :groupes
      resources :authors
      resources :classes
      resources :categories
      resources :articles
      resources :comments
    end
  end
end
