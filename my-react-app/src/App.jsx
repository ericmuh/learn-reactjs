import HelloWorld from './HelloWorld'
import Card from './Card'
import UserDetails from './UserDetails'

function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} width={props.size}></img>
    </>
  );

  function App() {

    const users = [
      {
        id: 1,
        name: 'John',
        age: 30,
        user_image: 'https://picsum.photos/id/236/200/300'
      },
      {
        id: 2,
        name: 'Jane',
        age: 24,
        user_image: 'https://picsum.photos/id/237/200/300'
      },
      {
        id: 3,
        name: 'Jack',
        age: 32,
        user_image: 'https://picsum.photos/id/238/200/300'
      },
      {
        id: 4,
        name: 'Jill',
        age: 28,
        user_image: 'https://picsum.photos/id/239/200/300'
      },
    ]

    return (
      <>
        <HelloWorld />
        {
          users.map((user) => {
            return (
              <Card key={user.id}>
                <img src={user.user_image} alt="some Image" />
                <UserDetails name={user.name} age={user.age} />
              </Card>
            )
          })
        }
        <Article
          details={{
            title: 'Morse Code: A visual guide',
            image: 'https://i.imgur.com/5OluoVs.png'
          }}
          size={100}
        />
      </>
    )
  }

  export default App
