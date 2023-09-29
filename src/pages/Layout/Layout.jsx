import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <div className={css.layout_nav}>
        <NavLink to="/" className={css.layout_link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.layout_link}>
          Movies
        </NavLink>
      </div>

      <div className={css.layout_container}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
