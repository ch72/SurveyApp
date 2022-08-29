class CreateSurveyResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :survey_responses do |t|
      t.references :survey_question, null: false
      t.text :response

      t.timestamps
    end
  end
end
