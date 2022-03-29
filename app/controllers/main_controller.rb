# frozen_string_literal: true

# app/controllers/main_controller.rb
class MainController < ApplicationController
  before_action :force_json, only: :search

  def index; end

  # J'utilise la méthode "ransack" de ma gem.
  def search
    @memories = Memory.ransack(country_cont: params[:q]).result(distinct: true)
  end

  private

  # Je force la requette à être au format json.
  def force_json
    request.format = :json
  end
end
