Rails.application.routes.draw do
 root :to => 'pages#index'
 get '/search' => 'pages#search'
 post '/search' => 'pages#search_results'
 post '/login' => 'sessions#create'
 delete '/login' => 'sessions#destroy'
 resources :users
 resources :airplanes
 resources :flights
 resources :reservations
end
