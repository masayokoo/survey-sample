class CreateSurveys < ActiveRecord::Migration[6.1]
  def change
    create_table :surveys, id: false do |t|
      t.string :id, limit: 36, null: false, primary_key: true, default: ->{"(uuid())"}
      t.json :questions

      t.timestamps
    end
  end
end
