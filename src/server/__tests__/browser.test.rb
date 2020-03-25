# http://sinatrarb.com/testing.html

ENV['APP_ENV'] = 'test'

require 'test/unit'
require 'rack/test'
require_relative '../init'

class ReactinatraIndexTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def test_landing_page_serves
    Reactinatra.get '/'
    assert last_response.ok?
  end
end
