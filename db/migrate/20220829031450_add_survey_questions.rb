class AddSurveyQuestions < ActiveRecord::Migration[7.0]
  def change
    SurveyQuestion.create!(question: 'Which label best describes you?')
    SurveyQuestion.create!(question: 'Is there any additional information you would like to provide about yourself?')
    SurveyQuestion.create!(question: 'Which area do you think is the strongest on my resume?')
    SurveyQuestion.create!(question: 'If I want to be a better software engineer, which area should I focus on the most?')
    SurveyQuestion.create!(question: 'Any general feedback on how I can improve?')
  end
end
