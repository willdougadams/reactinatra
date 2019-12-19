import '../assets/App.scss'

import * as React from 'react'
//import sinatra from '../assets/sinatra'


const Landing: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Reactinatra!  Run <code>npm run dev</code> to launch with asset hot-reloading
        </p>
        <img
          src={'web/assets/sinatra.json'}
        />
        <p>
          Or you can edit <code>src/App.tsx</code>, run <code>webpack</code> to bundle assets, then <br />
          <code>ruby derrit.rb</code> to launch the server and visit https://localhost:4567/ to see!
        </p>
      </header>
    </div>
  )
}

export default Landing
