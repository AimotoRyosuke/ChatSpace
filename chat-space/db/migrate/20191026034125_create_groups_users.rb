class CreateGroupsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :groups_users do |t|
      t.references :user, foreign: true 
      t.references :group, foreign: true 
      t.timestamps
    end
  end
end
