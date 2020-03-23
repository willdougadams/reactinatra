require 'sinatra/base'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    begin
      id = DB[:users].insert nil, @body['name'], @body['username'], @body['email'], @body['password']
      puts id
      redirect "/user/#{id}"
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end
end
