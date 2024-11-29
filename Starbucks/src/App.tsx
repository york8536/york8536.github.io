import { useState } from 'react'

import './App.css'
import TopBar from './components/TopBar/TopBar'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background'>
      <TopBar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
