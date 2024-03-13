

function Feedback({count, totalFeedback, totalPercent}) {
  return (
    <div>
      <p>Good: { count.good}</p>
      <p>Neutral: { count.neutral}</p>
      <p>Bad: {count.bad}</p>
      <p>Total: {totalFeedback }</p>
      <p>Positive: {totalPercent }%</p>
    </div>
  )
}

export default Feedback
