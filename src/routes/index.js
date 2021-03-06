import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Loader from '../components/Loader';

import AlertContainer from '../containers/alert/containers/AlertContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ComicList = lazy(() => import('../containers/comic-list/containers/ComicListContainer'));
const ComicDetails = lazy(() => import('../containers/comic-details/containers/ComicDetailsContainer'));
const NotFoundContainer = lazy(() => import('../containers/not-found/containers/NotFoundContainer'));

const routes = [
  {
    key: 'comics-list',
    path: '/',
    exact: true,
    component: ComicList,
  }, {
    key: 'comic-details',
    path: '/comics/:id',
    exact: true,
    component: ComicDetails,
  }, {
    key: 'not-found',
    path: '*',
    exact: true,
    component: NotFoundContainer,
  },
];

export const Routes = () => (
  <BrowserRouter>
    <div className="routes">
      <AlertContainer />

      <Suspense fallback={<Loader show />}>
        <Route key="header" component={Header} />

        <div className="wrap-routes">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Suspense>
    </div>

    <Footer />
  </BrowserRouter>
);
