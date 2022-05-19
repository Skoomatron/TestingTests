import axios from 'axios';

const App = () => {

  const posty = () => {
    axios.post('/post', { name: 'Trevor' })
    .then((response) => {
      console.log(response.body, 'this is posty')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
    Hello World
    <button onClick={posty}>Post Button</button>
    <button>Get Button</button>
    </div>
  )
}

export default App
