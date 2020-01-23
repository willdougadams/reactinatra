require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    begin
      id = DB[:users].insert @body['name'], @body['username'], @body['email'], @body['password']
      [200, {}, ["#{id}"]]
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end
end
