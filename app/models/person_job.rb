class PersonJob < ApplicationRecord
  belongs_to :character
  belongs_to :job

  has_one :company, through: :job

  validates :job, presence: true
  validates :person, presence: true
  validates :start_date, presence: true
  validates :person,
            uniqueness: { scope: [ :job, :start_date ],
                          message: "person and job with start_date already exists" }
end
