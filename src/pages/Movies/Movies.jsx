import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { searchByName } from 'SearchMovies/api';
import css from './Movies.module.css';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams('');
  const location = useLocation();

  const searchName = searchParams.get('name');

  useEffect(() => {
    if (searchName) {
      searchByName(searchName).then(setMovies);
    }
  }, [searchName]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await searchByName(name);
    setMovies(response);
    setSearchparams({ name });
    setName('');
  };

  const onChange = e => {
    setName(e.target.value);
  };

  return (
    <>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map(({ id, title, poster }) => (
            <li key={id} className={css.movie_item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movie_link}
              >
                <img src={poster} alt={title} className={css.movie_img} />
                <h3 className={css.movie_tittle}>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
