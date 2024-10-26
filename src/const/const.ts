enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Error = '/error'
}

 enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum TitleDescription {
  MainPage = '6 cities',
  LoginPage = '6 cities: authorization',
  FavoritePage = '6 cities: favorites',
  OfferPage = '6 cities: offer',
  ErrorPage = '6 cities: error'
}

const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

const CitiesForFilter = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

const CURRENT_ICON = {
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};

const DEFAULT_ICON = {
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};

const DEFAULT_DESCRIPTION = {
  title: 'Amsterdam',
  lat: 52.3909553943508,
  lng: 4.85309666406198,
  zoom: 13,
};

const LengthComment = {
  MIN: 50,
  MAX: 300
};


export {
  AppRoute,
  AuthorizationStatus,
  TitleDescription,
  Cities,
  CitiesForFilter,
  URL_MARKER_DEFAULT,
  CURRENT_ICON,
  DEFAULT_ICON,
  DEFAULT_DESCRIPTION,
  LengthComment
};

