# encoding: utf-8
require 'sinatra/base'

class Reactinatra < Sinatra::Base
  get '/' do
    @react_module = 'landing'
    erb :react
  end

  get '/signup' do
    @react_module = 'signup'
    erb :react
  end

  get '/user/:id' do
    @react_module = 'dashboard'
    @user_id = @params['id']
    erb :user
  end
end
