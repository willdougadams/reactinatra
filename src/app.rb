# encoding: utf-8
require 'sinatra/base'

require_relative 'models/init'
require_relative 'server/init'

class Reactinatra < Sinatra::Base
  enable :sessions
  set :public_folder, 'public'

  before do
    request.body.rewind
    body = request.body.read
    if !body.nil? && !body.empty?
      @body = JSON.parse body
    end
  end
end

Reactinatra.run!
