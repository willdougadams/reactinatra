# encoding: utf-8
DB.create_table! :user do
  Integer primary_key auto_increment :id
  String :username
  String :email
  String :password
end
