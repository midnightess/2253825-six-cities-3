import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Offer } from '../../mocks/offers';
import { AppRoute } from '../../const/const';

type CardPagesProps = {
  Offer: Offer;
}

function CardOffer ({Offer: offer}: CardPagesProps) : JSX.Element{
  const [cardState, setCardState] = useState({
    offerId: ''
  });

  function onGetIdCard () {
    setCardState({
      ...cardState,
      offerId: offer.id,
    });
  }

  function onChangePage () {}

  return(
    <article className="cities__card place-card" onMouseOver = {onGetIdCard} onClick = {onChangePage}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/:offerId`} >
          <img className="place-card__image" src= {offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"/>
@@ -22,17 +47,18 @@
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: (offer.rating / 5) * 100}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}


export default CardOffer;
