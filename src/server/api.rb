require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    begin
      id = DB[:users].insert @body
      [200, {}, ["#{id}"]]
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end
end
