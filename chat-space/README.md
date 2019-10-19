# README

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, foreign_key: true|
--------------------
# Association
- has_many :users, through: :groups_users
- has_many :messages
- has_may :groups_users

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|
--------------------
# Association
- has_many :groups :through: :groups_users
- has_many :messages
- has_many :groups_users

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_user|integer|null: false, foreign_key: true|
--------------------
# Association
- belongs_to :user
- belongs_to :chat

## groups_usersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
--------------------
# Association
- belongs_to:user
- belongs_to :group