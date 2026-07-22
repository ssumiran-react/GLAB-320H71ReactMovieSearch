import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'


function App() {
  const [count, setCount] = useState(0)

  // Constant with your API Key
  //const apiKey = vite_apiKey;

  // State to hold movie data
  const [movie, setMovie] = useState([]);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=22a9a0da` 
    );//&t=${searchTerm}`
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App
