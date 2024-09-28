import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import ErrorMessage from './components/error-message/error-message';
import PrivateRoute from './components/privat-route/privat-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const/const';

type AppOfferProps = {
  offerCount: number;
}

function App({offerCount: OfferCount}: AppOfferProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element ={<MainPage OfferCount = {OfferCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element ={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element ={
            <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element ={<OfferPage/>}
        />
        <Route
          path={AppRoute.Error}
          element ={<ErrorMessage/>}
        />
        <Route
          path="*"
          element={<ErrorMessage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
