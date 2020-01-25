Rails.application.routes.draw do
  get '/calendar', to: 'pages#calendar'
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :events
      post '/events/search', to: 'events#search_events_in_week'
    end
  end
end
