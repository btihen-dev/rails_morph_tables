class CharacterJob < ApplicationRecord
  belongs_to :character
  belongs_to :job

  has_one :company, through: :job

  validates :job, presence: true
  validates :character, presence: true
  validates :start_date, presence: true
  validates :character,
            uniqueness: { scope: [ :job, :start_date ],
                          message: "person and job with start_date already exists" }
end
