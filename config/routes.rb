Rails.application.routes.draw do
  get 'reservations/index'

  get 'reservations/create'

  get 'reservations/edit'

  get 'reservations/destroy'

  get 'flights/index'

  get 'flights/create'

  get 'flights/edit'

  get 'flights/destroy'

  get 'airplanes/index'

  get 'airplanes/create'

  get 'airplanes/edit'

  get 'airplanes/destroy'

 root :to => 'pages#index'
 # resources :users, airplanes
end
