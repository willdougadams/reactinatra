# encoding: utf-8
DB.create_table :user do
  primary_key :id
  String :username
  String :email
  String :password
end
