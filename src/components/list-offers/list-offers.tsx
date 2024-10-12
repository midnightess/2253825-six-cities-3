import { Offer } from '../../mocks/offers';
import CardOffer from '../card/card';
import {useState} from 'react';


type ListOffersProps = {
  offers: Offer[];
}


function ListOffers ({offers}: ListOffersProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          key = {offer.id}
          offer = {offer}
          onMouseEnter={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
        />
      ))};
    </div>
  );
}


export default ListOffers;
