# http://sinatrarb.com/testing.html

ENV['APP_ENV'] = 'test'

require_relative '../api'
require 'test/unit'
require 'rack/test'

class ReactinatraIndexTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Reactinatra
  end

  def test_landing_page_serves
    post '/api/signup', params={
        :name => 'Willie',
        :username => 'willdougadams',
        :email => 'name@domain.com',
        :password => 'p455w0rD'
    }
    assert last_response.ok?
  end
end
