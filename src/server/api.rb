require 'sinatra'

require_relative "../models/init"

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    DB[:user].insert @body['username'], @body['email'], @body['password']
  end
end
