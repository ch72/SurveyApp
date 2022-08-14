Rails.application.routes.draw do

  root "components#survey"
  get "/resume", to: "components#survey"
  get "/survey", to: "components#survey"
  get "/confirm", to: "components#survey"

end
