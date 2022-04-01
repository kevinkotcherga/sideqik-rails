# frozen_string_literal: true

# app/controllers/memory_controller.rb
class MemoryController < ApplicationController
  def index; end

  def show; end

  def download_csv
    csv_file = File.join Rails.root, 'db', 'memory-tech-challenge-data.csv'
    # AddMemoryWorker est appellé depuis workers/add_memory_worker
    # perfom_async permet de transmetre les données à Redis.
    AddMemoryWorker.perform_async(csv_file)
    render json: Memory.all
  end
end
