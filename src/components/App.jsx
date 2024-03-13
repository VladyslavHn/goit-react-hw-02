// import { useState } from 'react'
import './App.css'
import Description from './description/description'
import Options from './options/options'
import Feedback from './feedback/feedback'
import { useEffect, useState } from 'react'
import Notification from './Notification/notification'

function App() {

  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem('saved-count') 

    if (savedCount !== null) {
      return JSON.parse(savedCount).count;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = count.good + count.neutral + count.bad;
  
  function updateFeedback(feedbackType) {
    setCount({...count, [feedbackType]: count[feedbackType] + 1})
  }
  
    function resetFeedback() {
    setCount({ good: 0, neutral: 0, bad: 0 });
    }
  
  const totalPercent = Math.round(((count.good + count.neutral) / totalFeedback) * 100)

  useEffect(() => {
    window.localStorage.setItem('saved-count', JSON.stringify({count}))
  }, [count])

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback } />
      {totalFeedback > 0 ? <Feedback count={count} totalPercent={totalPercent} totalFeedback={totalFeedback}/> : <Notification />}
    </div>
  )
}

export default App
