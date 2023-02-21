Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post "search", to: "currencies#search"
      post "calculate", to: "currencies#calculate"
    end
  end
end
