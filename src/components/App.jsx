import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('../pages/Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDeatils = lazy(() => import('../pages/Moviedetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NoResults = lazy(() => import('../pages/NoResults'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDeatils />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NoResults />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
