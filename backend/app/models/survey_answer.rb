class SurveyAnswer < ApplicationRecord
  validates :value, presence: true
end
