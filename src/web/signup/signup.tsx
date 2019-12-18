import './App.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import * as logo from './react.svg'
// import * as sinatra from './sinatra.png'
import InlineSVG from 'react-inlinesvg'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Reactinatra!  Run <code>npm run dev</code> to launch with asset hot-reloading
        </p>
        {/*
        <InlineSVG
          src={logo}
          width='33%'
        />
        <img
          src={sinatra}
          width='33%'
        />
        */}
        <p>
          Or you can edit <code>src/App.tsx</code>, run <code>webpack</code> to bundle assets, then <br />
          <code>ruby derrit.rb</code> to launch the server and visit https://localhost:4567/ to see!
        </p>
      </header>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
