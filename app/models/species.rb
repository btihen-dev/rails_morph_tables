class Species < ApplicationRecord
  has_many :characters, dependent: :destroy

  normalizes :species_name, with: ->(value) { value.strip }

  validates :species_name, presence: true
  validates :species_name, uniqueness: true
end
