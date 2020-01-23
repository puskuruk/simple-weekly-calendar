Rails.application.routes.draw do
  get 'pages/index'
  get 'pages/calendar'
  
  namespace :api do
    namespace :v1 do
      resources :events
      post '/events/search', to: 'events#search_events_in_week'
    end
  end
end
