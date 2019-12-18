import * as React from 'react'

interface AppProps {
  name: string
}

const App: React.FC<AppProps> = ( props: AppProps ) => {
  return (
    <h1>Hello, {props.name}!</h1>
  )
}

export default App
