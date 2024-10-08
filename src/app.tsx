import MainPages from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import ErrorMessage from './components/error-message/error-message';
import PrivateRoute from './components/privat-route/privat-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, TitleDescription } from './const/const';
import type { Offers } from './mocks/offers';

type AppOfferProps = {
  offerCount: number;
  OfferProps: Offers;
}

function App({offerCount: OfferCount, OfferProps: offers}: AppOfferProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element ={<MainPages offerCount = {OfferCount} Title = {TitleDescription.MainPage} Offers = {offers}/>}
        />

        <Route
          path={AppRoute.Login}
          element ={<LoginPage Title = {TitleDescription.LoginPage}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element ={
            <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
              <FavoritesPage Title = {TitleDescription.FavoritePage} Offers = {offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element ={<OfferPage Title = {TitleDescription.OfferPage}/>}
        />
        <Route
          path={AppRoute.Error}
          element ={<ErrorMessage Title = {TitleDescription.ErrorPage}/>}
        />
        <Route
          path="*"
          element={<ErrorMessage Title = {TitleDescription.ErrorPage}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
