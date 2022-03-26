# frozen_string_literal: true

# app/controllers/endangered_controller.rb
class EndangeredController < ApplicationController
  def download_csv
    endangered = Endangered.all
    render json: endangered
    csv_file = File.join Rails.root, 'db', 'sharks.csv'
    # AddEndangeredWorker est appellé depuis workers/add_endangered_worker
    # perfom_async permet de transmetre les données à Redis.
    AddEndangeredWorker.perform_async(csv_file)
  end
end
