# encoding: utf-8
require 'sinatra'

class Reactinatra < Sinatra::Base
  enable :sessions

  set :public_folder, 'public'
  set :views, 'public'
  set :root, 'public'

  configure { set :server, :puma }

  get '/' do
    @react_module = 'signup'
    erb :react
  end

  run!
end

require_relative 'models/init'
# require_relative 'helpers/init'
require_relative 'server/init'
