Rails.application.routes.draw do
 root :to => 'pages#index'
 get '/search' => 'pages#search'
 post '/search' => 'pages#search_results'
 resources :users
 resources :airplanes
 resources :flights
 resources :reservations
end
