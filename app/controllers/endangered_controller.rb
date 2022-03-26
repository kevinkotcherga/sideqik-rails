class EndangeredController < ApplicationController
  # N'utilise que les routes index et data pour la valeur @endangered.
  before_action :set_endangered, only: [:index, :data]

  # Si il y a plus de 0 instances, redirection vers la data route pour voir les information sur les requins.
  def index
    endangered = Endangered.all
    render json: endangered
  end

  def data
  end

  # Import le csv avec sidkiq.
  def upload
    csv_file = File.join Rails.root, 'db', 'sharks.csv'
    # AddEndangeredWorker est appellé depuis workers/add_endangered_worker
    # perfom_async permet de transmetre les données à Redis.
    AddEndangeredWorker.perform_async(csv_file)
    # Redirige vers la page data.
    redirect_to endangered_data_path, notice: 'Endangered sharks have been uploaded!'
  end

  # Détruit les données.
  def destroy
    # Appelle la RemoveEndangeredWorker et perfom_async permet de transmetre les données à Redis.
    RemoveEndangeredWorker.perform_async
    redirect_to root_path
  end

  private

  # Récupere chaque instance de la classe Endangered à partir de la base de données.
  def set_endangered
    @endangered = Endangered.all
  end
end
