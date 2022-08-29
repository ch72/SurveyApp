class SurveyQuestion < ApplicationRecord
  has_many :survey_responses, class_name: 'SurveyResponse'

  alias_attribute :responses, :survey_responses
end