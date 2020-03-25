require 'sinatra/base'

class Reactinatra < Sinatra::Base
  enable :sessions
  set :public_folder, 'public'
  set :views, 'public'

  before do
    request.body.rewind
    body = request.body.read
    if !body.nil? && !body.empty?
      @body = JSON.parse body
    end
  end
end
