require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    puts @body
    DB[:users].insert @body
  end
end
