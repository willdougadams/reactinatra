require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    puts @body
  end
end
