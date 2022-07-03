import {v4} from 'uuid'
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';
import '../css/cardView.css';

function CardsView(props) {
  const cards = props.cards.map((card) => <ShopCard card={card} key={v4()}/>);

  return (
    <div className="store_view-card">
      {cards}
    </div>
  )
}

export default CardsView

CardsView.propTypes = {
  cards: PropTypes.array.isRequired
}