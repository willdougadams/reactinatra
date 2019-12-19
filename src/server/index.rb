require 'sinatra'

class Reactinatra < Sinatra::Base
  get '/' do
    @react_module = 'landing'
    erb :react
  end

  get '/signin' do
    @react_module = 'signup'
    erb :react
  end
end
