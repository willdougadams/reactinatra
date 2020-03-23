require 'sinatra/base'

class Reactinatra < Sinatra::Base
  set :views, 'public'

  get '/' do
    @react_module = 'landing'
    erb :react
  end

  get '/signup' do
    @react_module = 'signup'
    erb :react
  end

  get '/user/:id' do
    @react_module = 'dashboard'
    erb :user
  end
end
