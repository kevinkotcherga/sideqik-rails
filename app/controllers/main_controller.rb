class MainController < ApplicationController
  before_action :force_json, only: :search

  def index; end

  def search
    @memories = Memory.ransack(country_cont: params[:q]).result(distinct: true)
  end

  private

  def force_json
    request.format = :json
  end
end
