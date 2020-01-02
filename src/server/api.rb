require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    @db[:user].insert @body['username'], @body['email'], @body['password']
  end
end
