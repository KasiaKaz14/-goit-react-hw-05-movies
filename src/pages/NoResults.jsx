import { Link } from 'react-router-dom';

export const NoResults = () => {
  return (
    <>
      <h2>Oops.. nothing found...</h2>
      <Link to="/">Back home</Link>
    </>
  );
};
