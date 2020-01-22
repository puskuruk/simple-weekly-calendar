Rails.application.routes.draw do
  get 'pages/index'
  get 'pages/calendar'
  
  namespace :api do
    namespace :v1 do
      resources :events
    end
  end
end
