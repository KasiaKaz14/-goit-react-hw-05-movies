import { searchMovieCredits } from 'SearchMovies/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    searchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {credits.length > 0 && (
        <ul className={css.actor}>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <li key={id} className={css.item}>
                <img src={photo} alt={name} className={css.img} />
                <div className={css.description}>
                  <p className={css.name}>{name}</p>
                  <p className={css.character}>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
