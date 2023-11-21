import { useState } from 'react'

const Header = () => {
  return (
    <h1>Give feedback</h1>
  )
}

const Button = ({handleGood, handleNeutral, handleBad}) => {
  return (
    <>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <p>{text} = {value}</p>
    </>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0) {
    return (
    <>
      <p>No feedback given</p>
    </>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text = "Good" value = {good}/>
      <StatisticLine text = "Nuetral" value = {neutral}/>
      <StatisticLine text = "Bad" value = {bad}/>
      <StatisticLine text = "All" value = {all}/>
      <StatisticLine text = "Average" value = {average()}/>
      <StatisticLine text = "Positive" value = {positive()}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + neutral + bad)
  const average = () => {
    if (all === 0) {
      return 0
    }
    return (good - bad) / all
  }

  const positive = () => {
    if (all === 0) {
      return 0
    }
    return (good * 100) / all
  }

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <>
      <Header />
      <Button handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </>
  )
}

export default App