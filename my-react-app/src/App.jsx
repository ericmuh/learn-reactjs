import HelloWorld from './HelloWorld'
import Card from './Card'
import UserDetails from './UserDetails'

function App() {
  return (
    <>
      <HelloWorld />

      <Card>
        <img src="https://example.com/image.png" alt="some Image" />
        <UserDetails name="John" age="30" />
      </Card>

      <Card name="Jane" age="24" />

    </>
  )
}

export default App
