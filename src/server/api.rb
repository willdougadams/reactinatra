require 'sinatra/base'

class Reactinatra < Sinatra::Base
  post '/api/signup' do
    begin
      id = DB[:users].insert nil, @body['name'], @body['username'], @body['email'], @body['password']
      session[:userId] = id
      puts "Created user #{id}"
      redirect "user/#{id}"
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end

  get '/api/user/:id/posts' do
    begin
      posts = DB[:posts].where(postedBy: @params['id']).all
      [200, {}, posts.to_json]
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end

  post '/api/createPost' do
    puts @body
    begin
      id = DB[:posts].insert nil, @body['text'], @body['isReplyTo'], session[:userId] || @body['userId'] , Time.now
      puts "Created post #{id}"
      [200, {}, [id.to_json]]
    rescue => e
      puts e
      [500, {}, [e.message]]
    end
  end
end
