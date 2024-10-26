import ListOffers from '../../components/list-offers/list-offers';
import useDocumentTitle from '../../hooks/document-title';
import type { Offer } from '../../types/types';
import MapComponent from '../../components/map/map';
import FilterCities from '../../components/filter-cities/filter-cities';
import { useState } from 'react';
import { Cities } from '../../const/const';

type MainPageProps = {
  title: string;
  offers: Offer[];
}


function MainPage (props: MainPageProps): JSX.Element {

  const { title, offers} = props;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const [selectedFilterCity, setSelectedFilterCity] = useState(Cities.Amsterdam);

  const citiesToFilter = offers.filter((city, index) => {
    if (city.city.name === selectedFilterCity) {

      return offers[index];
    }
  });

  const citiesToMap = citiesToFilter.map((offer) => {

    const points = {
      title: offer.city.name,
      lat: offer.city.location.latitude,
      lng: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    };

    return points;
  });

  const cityToMap = citiesToMap[0];

  const pointsOffersToMap = citiesToFilter.map((offer) => {

    const points = {
      title: offer.city.name,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
      zoom: offer.location.zoom,
      id: offer.id
    };

    return points;
  });

  function handleListItemHover (idOffer: string) {
    offers.find((offer, index: number) => {

      if (offer.id === idOffer){
        setSelectedPoint(offers[index]);
      }
    });
  }

  function onClickFilterCity (cityFilter: string) {
    setSelectedFilterCity(cityFilter);
  }

  function onLeaveMouseOffer () {
    setSelectedPoint(undefined);
  }

  useDocumentTitle(title);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <FilterCities onClickFilterCity = {onClickFilterCity}/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found"> {citiesToFilter.length} places to stay in {selectedFilterCity}</b>

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <ListOffers offers = {citiesToFilter} onMouseEnter = {handleListItemHover} onMouseLeave={onLeaveMouseOffer}/>

            </section>

            <MapComponent pointsToMap={pointsOffersToMap} cityToMap = {cityToMap} selectedPoint={selectedPoint} />

          </div>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
