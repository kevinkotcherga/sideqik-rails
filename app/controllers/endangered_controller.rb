# app/controllers/endangered_controller.rb
class EndangeredController < ApplicationController

  def index
    render json: Endangered.all
  end
  def download_csv
    endangered = Endangered.all
    render json: endangered
    csv_file = File.join Rails.root, 'db', 'sharks.csv'
    # AddEndangeredWorker est appellé depuis workers/add_endangered_worker
    # perfom_async permet de transmetre les données à Redis.
    AddEndangeredWorker.perform_async(csv_file)
  end

  def sort_by_iucn
    endangered_vu = Endangered.where(iucn:'vu')
    render json: endangered_vu
  end
end
