# frozen_string_literal: true

# app/controllers/memory_controller.rb
class MemoryController < ApplicationController
  def download_csv
    memory = Memory.all
    render json: memory
    csv_file = File.join Rails.root, 'db', 'memory-tech-challenge-data.csv'
    # AddMemoryWorker est appellé depuis workers/add_memory_worker
    # perfom_async permet de transmetre les données à Redis.
    AddMemoryWorker.perform_async(csv_file)
  end
end
