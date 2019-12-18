require 'sinatra'

require_relative "../models/init"

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    'posted to /signup'
  end
end
