class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :text
      t.integer :author
      t.integer :category
      t.integer :classe
      t.integer :groupe
      t.integer :reviewer
      t.boolean :reviewed
      t.boolean :completed

      t.timestamps
    end
  end
end
