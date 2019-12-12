require 'sinatra'
require 'react-sinatra'

set :public_folder, 'public'
set :views, 'public'
set :root, 'public'

configure { set :server, :puma }

get '/' do
  render :html, :index
end
