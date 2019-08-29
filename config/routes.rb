Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  namespace :api, constraints: { format: 'json' } do
    namespace :v1 do
      resources :lists
      resources :list_words
    end
  end

end
