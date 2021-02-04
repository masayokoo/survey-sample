class SurveyAnswersController < ApplicationController
  before_action :set_survey_answer, only: [:show, :edit, :update, :delete]

  # GET /survey_answers
  def index
    @survey_answers = SurveyAnswer.all
    render json: @survey_answers
  end

  # GET /survey_answers/1
  def show
  end

  # GET /survey_answers/new
  def new
    @survey_answer = SurveyAnswer.new
  end

  # GET /survey_answers/1/edit
  def edit
  end

  # POST /survey_answers
  def create
    survey = Survey.find(params[:survey_id])
    survey_answer = survey.survey_answers.build(survey_answer_params)

    if survey_answer.save!
      render json: {success: true, location: url_for(survey_answer)}
    else
      render json: {success: false, location: url_for(survey_answer)}, status: :bad_request
    end
  end

  # PUT /survey_answers/1
  def update
    if @survey_answer.update(survey_answer_params)
      render json: {success: true, location: url_for(@survey_answer)}
    else
      render :edit
    end
  end

  # DELETE /survey_answers/1
  def delete
    @survey_answer.destroy
    if request.xhr?
      render json: {success: true}
    else
      redirect_to survey_answers_path
    end
  end

private
  # Use callbacks to share common setup or constraints between actions.
  def set_survey_answer
    @survey_answer = SurveyAnswer.find(params[:id])
  end

  def survey_answer_params
    params.require(:survey_answer).permit(value: {})
  end
end
