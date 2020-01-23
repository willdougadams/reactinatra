# http://sinatrarb.com/testing.html

ENV['APP_ENV'] = 'test'

require_relative '../index'
require 'test/unit'
require 'rack/test'

class ReactinatraIndexTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Reactinatra
  end

  def test_landing_page_serves
    get '/'
    assert last_response.ok?
  end

  def test_signup_page_serves
    get '/signup'
    assert last_response.ok?
  end

  def test_bad_bath_404s
    get '/bunk'
    assert_false last_response.ok?
    assert_equal last_response.status, 404
  end
end
