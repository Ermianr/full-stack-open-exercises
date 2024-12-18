const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.numberEx}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.content.parts[0].part} numberEx={props.content.parts[0].exercises}/>
      <Part part={props.content.parts[1].part} numberEx={props.content.parts[1].exercises}/>
      <Part part={props.content.parts[2].part} numberEx={props.content.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
    </>
  )
}
const App = () => {
  const info = {
    course: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={info.course}/>
      <Content content={info}/>
      <Total total={info}/>
    </div>
  )
}

export default App
