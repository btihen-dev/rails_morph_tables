class Company < ApplicationRecord
  has_many :jobs, dependent: :destroy
  has_many :character_jobs, through: :jobs
  has_many :characters, through: :character_jobs

  normalizes :company_name,  with: ->(value) { value.strip }

  validates :company_name, presence: true
  validates :company_name, uniqueness: true
end
