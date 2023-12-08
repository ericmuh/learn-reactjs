import HelloWorld from './HelloWorld'
import Article from './Article'
import UserDetails from './UserDetails'

function App() {
  return (
    <>
      <HelloWorld />

      <Article>
        <img src="https://example.com/image.png" alt="some Image" />
        <UserDetails name="John" age="30" />
      </Article>


    </>
  )
}

export default App
