// import { useState } from 'react'
import './App.css'
import Description from './description/description'
import Options from './options/options'
import Feedback from './feedback/feedback'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Description />
      <Options />
      <Feedback/>
    </div>
  )
}

export default App
