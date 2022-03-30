class LetestsController < ApplicationController
  require 'csv'

  def index
    render json: Letest.all
  end

  def import_csv
    items = []
    CSV.foreach('db/memory-tech-challenge-data.csv', headers: true) do |row|
      items << row.to_h
    end
    Letest.import(items)
  end
end
