class FileDownloaderJob < ApplicationJob
  queue_as :default
  def perform(all)
    attributes = %w{book_id book_name price}
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |book|
        csv << book.attributes.values_at(*attributes)
      end
    end
  end
end
