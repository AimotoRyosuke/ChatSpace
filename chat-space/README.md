# README

## chat_groupsテーブル

|Column|Type|Option|
|------|----|------|
|group|string|null: false, foreign_key: true|
|user_id|integer||
--------------------
# Association
- has_many :users
- has many :messages

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|user_password|string|foreign_key: true|
|group_id|integer||
--------------------
# Association
- has_many :chat_groups
- has many :messages

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer||
|group_id|integer||
--------------------
# Association
- belongs_to :user
- belongs_to :chat
