import './assets/common.scss'

import * as React from 'react'
import sinatra from './assets/sinatra.svg'
import reactLogo from './assets/react.svg'

const Landing: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={ { display: 'flex', justifyContent: 'center', alignContent: 'center'} }>
          <img width='20%' src={sinatra} alt={''} />
          <img width='20%' src={reactLogo} alt={''} />
        </div>
        <p> {"Welcome to Reactinatra!  Sign in "}<a href='/signin'>here</a>{", or create a user "}<a href='/signup'>here</a> {"if you're new :)"} </p>
      </header>
    </div>
  )
}

export default Landing