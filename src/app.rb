# encoding: utf-8
require 'sinatra'

require_relative 'models/init'
require_relative 'server/init'

class Reactinatra < Sinatra::Base
  enable :sessions

  set :public_folder, 'public'
  set :views, 'public'
  set :root, 'public'

  configure { set :server, :puma }

  before do
    request.body.rewind
    body = request.body.read
    if !body.nil? && !body.empty?
      @body = JSON.parse body
    end
  end

  run!
end

# require_relative 'helpers/init'
