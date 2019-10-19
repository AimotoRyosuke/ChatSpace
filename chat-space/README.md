# README

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|group|string|null: false, foreign_key: true|
--------------------
# Association
- has many :users, through: :groups_users
- has many :messages

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|user_password|string|foreign_key: true|
--------------------
# Association
- has_many :groups :through: :groups_users
- has many :messages

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer||
|group_user|integer||
--------------------
# Association
- belongs_to :user
- belongs_to :chat

## groups_usersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer||
|group_id|integer||
--------------------
# Association
- belongs_to:user
- belongs_to :chat