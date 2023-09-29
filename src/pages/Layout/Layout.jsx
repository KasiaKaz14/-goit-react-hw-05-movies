import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <div>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className={css.link} to="movies">
            Movies
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
