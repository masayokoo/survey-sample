class SurveysController < ApplicationController
  # GET /surveys
  def index
    surveys = Survey.all
    render json: surveys
  end

  # GET /surveys/1
  def show
    survey = Survey.find(params[:survey_id])
    render json: survey
  end

  # GET /surveys/new
  def new
    @survey = Survey.new
  end

  # GET /surveys/1/edit
  def edit
  end

  # POST /surveys
  def create
    @survey = Survey.new(survey_params)

    if @survey.save
      if request.xhr?
        render json: {success: true, location: url_for(@survey)}
      else
        redirect_to survey_path(@survey)
      end
    else
      render :new
    end
  end

  # PUT /surveys/1
  def update
    if @survey.update(survey_params)
      if request.xhr?
        render json: {success: true, location: url_for(@survey)}
      else
        redirect_to survey_path(@survey)
      end
    else
      render :edit
    end
  end

  # DELETE /surveys/1
  def delete
    @survey.destroy
    if request.xhr?
      render json: {success: true}
    else
      redirect_to surveys_path
    end
  end

private
  # Use callbacks to share common setup or constraints between actions.
  def set_survey
    @survey = Survey.find(params[:id])
  end

  def survey_params
    params.require(:survey).permit(:questions)
  end
end
