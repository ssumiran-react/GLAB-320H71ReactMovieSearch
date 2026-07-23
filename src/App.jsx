import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'


function App() {
  const [count, setCount] = useState(0)
  // State to hold movie data
  const [movie, setMovie] = useState([]);
  // Constant with your API Key
  const APIKEY = import.meta.env.VITE_API_KEY
  
  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${APIKEY}&t=${searchTerm}` 
      );//
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    } catch(e) {
      console.error(e)
    }
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App
