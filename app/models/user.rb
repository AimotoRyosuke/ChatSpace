class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :groups, through: :groups_users
  has_many :messages
  has_many :groups_users

  def self.search(input, ids)
    return nil if input == ""
    User.where(['name LIKE ?', "%#{input}%"] ).where.not(id: ids).limit(10)
  end

end
