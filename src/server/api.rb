require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    begin
      DB[:users].insert @body
      [200, {}, ['OK']]
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end
end
