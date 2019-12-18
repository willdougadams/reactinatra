require 'sinatra'

class Reactinatra < Sinatra::Base
  get '/' do
    @react_module = 'signup'
    erb :react
  end
end
