import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const ShowNote = ({votes , anecdote}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes}</p>
    </>
  )
}

const Title = ({text}) => <h2>{text}</h2>

const BestAnecdote = ({votes , anecdotes}) => {
  const maxVote = Math.max(...votes)
  const indexWin = votes.indexOf(maxVote)
  const bestAnecdote = anecdotes[indexWin] 

  return (
    <>
      <ShowNote votes={maxVote} anecdote={bestAnecdote}/>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextRandomHistory = () => {
    const randomNumber = Math.floor(Math.random() * 8)
    setSelected(randomNumber)
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <>
      <Title text='Anecdote of the day'/>
      <ShowNote votes={votes[selected]} anecdote={anecdotes[selected]}/>
      <Button onClick={voteAnecdote} text='vote' />
      <Button onClick={nextRandomHistory} text='next anecdote'/>
      <Title text='Anecdote with most votes'/>
      <BestAnecdote votes={votes} anecdotes={anecdotes}/>
    </>
  )
}

export default App