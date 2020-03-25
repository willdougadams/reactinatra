# encoding: utf-8
require "sequel"

DB.create_table :posts do
  primary_key :id, auto_increment: true, null: false
  String :text, :null => false
  Number :isReplyTo, :null => true
  Number :postedBy, :null => false
  DateTime :postedAt, :null => false
end

