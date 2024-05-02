class CreateCharacters < ActiveRecord::Migration[7.1]
  def change
    create_table :characters do |t|
      t.string :nick_name
      t.string :first_name
      t.string :last_name
      t.string :given_name
      t.string :gender
      t.references :species, null: false, foreign_key: true

      t.timestamps
    end
  end
end
