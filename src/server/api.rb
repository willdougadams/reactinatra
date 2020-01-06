require 'sinatra'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    begin
      id = DB[:users].insert @body
      redirect "/user/#{id}", 302
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end
end
