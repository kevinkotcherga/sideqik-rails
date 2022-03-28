class AddMemoryWorker
  # AddMemoryWorker est la classe appellée dans memory_controller.
  # Nous importons csv
  require 'csv'
  # Nous importons Sidekiq.
  include Sidekiq::Worker
  # Cette option s'assure que sidekiq ne réessaie pas le téléchargement en cas d'échec.
  sidekiq_options retry: false

  def perform(csv_file)
    # Headers:true garantit que la première ligne du fichier est traitée comme une ligne d'en-têtes.
    CSV.foreach(csv_file, headers: true) do |memory|
    # Nous utilisons la foreach méthode de la bibliothèque CSV pour lire les valeurs dans le fichier.
    Memory.create(date: memory[0], order_id: memory[1], customer_id: memory[2], country: memory[3], product_code: memory[4], product_description: memory[5], quantity: memory[6], unit_price: memory[7])
  end
 end

end
