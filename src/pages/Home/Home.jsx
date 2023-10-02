import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchTranding } from 'SearchMovies/api';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    searchTranding().then(setMovies);
  }, []);

  return (
    <div className={css.container}>
      <h1>Tranding today</h1>
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map(({ id, title, poster }) => (
            <li key={id} className={css.item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movie_link}
              >
                <img src={poster} alt={title} className={css.img} />
                <h3 className={css.movie_title}>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
