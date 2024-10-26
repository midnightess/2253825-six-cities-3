import { Link } from 'react-router-dom';
import type { Offer } from '../../types/types';
import { AppRoute } from '../../const/const';
import { useNavigate } from 'react-router-dom';


type CardPagesProps = {
  offer: Offer;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function CardOffer ({offer, onMouseEnter, onMouseLeave}: CardPagesProps) : JSX.Element{

  const navigate = useNavigate();

  return(
    <article className="cities__card place-card"
      onMouseEnter={onMouseEnter}
      onClick={() => navigate(`${AppRoute.Offer}/${offer.id}`)}
      onMouseLeave={onMouseLeave}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`} >
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
