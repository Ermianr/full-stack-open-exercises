import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Title = ({text}) => <h2>{text}</h2>

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const StatisticsRender = ({notes}) => {
  let sumAll = notes.good + notes.neutral + notes.bad

  if (sumAll === 0) {
    return <p>No feedback given</p>
  } 

  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={notes.good}/>
        <StatisticsLine text='neutral' value={notes.neutral}/>
        <StatisticsLine text='bad' value={notes.bad}/>
        <StatisticsLine text='all' value={sumAll}/>
        <StatisticsLine text='average' value={sumAll / 3}/>
        <StatisticsLine text='positive' value={(notes.good / sumAll) * 100 + " %"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [notes, setNotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleClickGood = () => setNotes({...notes, good: notes.good + 1})
  
  const handleClickNeutral = () => setNotes({...notes, neutral: notes.neutral + 1})

  const handleClickBad = () => setNotes({...notes, bad: notes.bad + 1})

  return (
    <div>
      <Title text='give feedback'/>
      <Button text='good' onClick={handleClickGood}/>
      <Button text='neutral' onClick={handleClickNeutral}/>
      <Button text='bad' onClick={handleClickBad}/>
      <Title text='statistics'/>
      <StatisticsRender notes={notes}/>
    </div>
  )
}

export default App
