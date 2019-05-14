# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups through: :users_groups

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text|--------|
|image|string|-----|
|group_id|integer|-|
|user_id|integer|--|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name|text|--|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|users_id|integer|-|
|groups_id|integer-|

### Association
- belongs_to :user
- belongs_to :group

