import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allroutes from './Allroutes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/AppStore'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
        <Body />
            <Allroutes />
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App