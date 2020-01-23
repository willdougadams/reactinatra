# http://sinatrarb.com/testing.html

ENV['APP_ENV'] = 'test'

require_relative '../../app'
require 'test/unit'
require 'rack/test'

class ReactinatraIndexTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Reactinatra
  end

  def test_landing_page_serves
    post '/api/signup', {
        :name => 'Willie',
        :username => 'willdougadams',
        :email => 'name@domain.com',
        :password => 'p455w0rD'
    }
    assert_match /anything/, last_response.body
    assert last_response.ok?
  end
end
