import Student from "./components/Student"

function App() {

  return (
     <>
      <Student name="John" age="20" grade="A"/>
      <Student name="Jane" age="22" grade="B"/>
      <Student name="Bob" age="19" grade="C"/>
      <Student name="Alice" age="21" grade="A"  topper={false}/>
    </>
     
  )
}

export default App
