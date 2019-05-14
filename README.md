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
|name|string|null: false, index: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text|--------|
|image|string|-----|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|--|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|users|references|null: false, foreign_key: true|
|groups|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

