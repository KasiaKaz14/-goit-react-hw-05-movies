import { useState, useEffect } from 'react';
import { apiKey } from 'SearchMovies/SearchMovies';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  const [trandingMovies, setTrandingMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTrandingMovies(data.results);
        console.log(data.results);
        return data.results;
      } catch (error) {
        console.error('Error:', error);
        return [];
      }
    };
    fetchMovies();
  }, [apiUrl]);

  return (
    <div>
      <ul className={css.container}>
        {trandingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
