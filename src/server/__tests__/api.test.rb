# http://sinatrarb.com/testing.html

ENV['APP_ENV'] = 'test'

require 'test/unit'
require 'rack/test'

require_relative '../../models/init'
require_relative '../init'

class ReactinatraBrowserTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Reactinatra
  end

  def test_landing_page_serves
    get '/'
    assert last_response.ok?
  end
end
