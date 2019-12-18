import '../assets/App.scss'

import * as React from 'react'
// import logo from '../assets/react.svg'
// import * as sinatra from './sinatra.png'
// import SVG from 'react-inlinesvg'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome!  Create your user below</h3>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/*}
        <SVG
          src={logo}
          width='33%'
        />
        <img
          src={sinatra}
          width='33%'
        />
        */}
      </header>
    </div>
  )
}

export default App
