import MainPage from './pages/main-page/main-page';
import {HelmetProvider} from 'react-helmet-async';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import ErrorMessage from './components/error-message/error-message';
import PrivateRoute from './components/privat-route/privat-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, TitleDescription } from './const/const';
import type { Offer } from './mocks/offers';

type AppOfferProps = {
  offers: Offer[];
}

function App({offers}: AppOfferProps,): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element ={<MainPage title = {TitleDescription.MainPage} offers = {offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element ={<LoginPage title = {TitleDescription.LoginPage}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element ={
              <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
                <FavoritesPage title = {TitleDescription.FavoritePage} offers = {offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element ={<OfferPage title = {TitleDescription.OfferPage}/>}
          />
          <Route
            path={AppRoute.Error}
            element ={<ErrorMessage title = {TitleDescription.ErrorPage}/>}
          />
          <Route
            path="*"
            element={<ErrorMessage title = {TitleDescription.ErrorPage}/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
