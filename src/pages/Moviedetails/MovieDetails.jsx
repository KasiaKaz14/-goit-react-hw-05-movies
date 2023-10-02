import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { searchMovieDetails } from 'SearchMovies/api';
import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movie';

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    searchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  return (
    <>
      <button type="button" onClick={backToMovies} className={css.button}>
        Go Back
      </button>
      {movie && (
        <div>
          <div className={css.container}>
            <img src={poster} alt={title} className={css.img} />
            <div className={css.info}>
              <h3 className={css.title}>
                {title} ({releaseYear})
              </h3>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </div>
          </div>

          <p className={css.addInfo}>Additional information</p>

          <div className={css.info_list}>
            <li>
              <Link
                to={'cast'}
                state={{ from: location?.state?.from }}
                className={css.detailLink}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={'reviews'}
                state={{ from: location?.state?.from }}
                className={css.detailLink}
              >
                Reviews
              </Link>
            </li>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
