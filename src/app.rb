# encoding: utf-8
require 'sinatra'

require_relative 'models/init'
# require_relative 'helpers/init'
require_relative 'server/init'

class Reactinatra < Sinatra::Base
  enable :sessions

  set :public_folder, 'public'
  set :views, 'public'
  set :root, 'public'

  configure { set :server, :puma }

  before do
    body = request.body.rewind
    if !body.nil? and !body.empty?
      @body = JSON.parse body
    else
      @body = {}
    end
  end

  run!
end