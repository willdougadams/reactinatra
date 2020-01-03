# encoding: utf-8
require "sequel"

DB.create_table :users do
  primary_key :id, auto_increment: true
  String :name, unique: true, null: false
  String :username, unique: true, null: false
  String :email, unique: true, null: false
  String :password, null: false
end

