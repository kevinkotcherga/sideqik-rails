class AddEndangeredWorker
  # AddEndangeredWorker est la classe appellée dans endangered_controller.
  # Nous importons csv
  require 'csv'
  # Nous importons Sidekiq.
  include Sidekiq::Worker
  # Cette option s'assure que sidekiq ne réessaie pas le téléchargement en cas d'échec.
  sidekiq_options retry: false

  def perform(csv_file)
    # Headers:true garantit que la première ligne du fichier est traitée comme une ligne d'en-têtes.
    CSV.foreach(csv_file, headers: true) do |shark|
      # Nous utilisons la foreach méthode de la bibliothèque CSV pour lire les valeurs dans le fichier.
      Endangered.create(name: shark[0], iucn: shark[1])
    end
  end
end
