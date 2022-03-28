# frozen_string_literal: true

Rails.application.routes.draw do
  get 'endangered/download_csv'
  get 'memory/download_csv'
end
