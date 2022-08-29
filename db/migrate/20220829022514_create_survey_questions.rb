class CreateSurveyQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :survey_questions do |t|
      t.text :question, null: false

      t.timestamps
    end
  end
end
