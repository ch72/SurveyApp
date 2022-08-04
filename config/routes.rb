Rails.application.routes.draw do

  root "components#survey"
  get "/resume", to: "components#resume"
  get "/confirm", to: "components#confirm"

end
