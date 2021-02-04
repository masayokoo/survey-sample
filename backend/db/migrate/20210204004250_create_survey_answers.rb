class CreateSurveyAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :survey_answers do |t|
      t.references :survey, type: :string, null: false, foreign_key: true
      t.json :value

      t.timestamps
    end
  end
end
