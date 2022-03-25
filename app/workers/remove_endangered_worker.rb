class RemoveEndangeredWorker
  # la bibliothèque CSV fonctionne comme un Worker Sidekiq
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform
    # Cette méthode permet de gérer la déstruction des données
    Endangered.destroy_all
  end
end
