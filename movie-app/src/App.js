import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]); //empty array 
  const getMovies = (API) => {
    fetch(API).then(res => res.json())
    .then(data => {
      console.log(data); //from console.log we see that we have an array of length 20.
      setMovies(data.results);
    });
  }

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const [searchTerm, setsearchTerm] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    }
  };

  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
      <>   
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>

        </form>
      </header>

      <div class="nine">
        <h1>Movie Recap<span>Top movies this week</span></h1>
      </div>

      <div className="movie-container"> 
      {/* map is like a for loop, its used to iterate over an array and calling 
      a function on every element of the array, for each object in movies we are \
      creating a movie component */}
        {movies.length> 0 && movies.map(movie => ( 
          //console.log(data) shows array(20) so this will be called 20 times.
          <Movie key={movie.id} {... movie } /> //...spreads the data and so we get all the data seperately, that way we can use it for props 
        ))}
      </div>
    </>
  );
}

export default App;
