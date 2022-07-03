import {v4} from 'uuid'
import PropTypes from 'prop-types';
import ShopItem from './ShopItem'
import '../css/rowView.css'

function ListView(props) {
  const cards = props.cards.map((card) => <ShopItem card={card} key={v4()}/>)
  return(
    <div className="store_view-row">
      {cards}
    </div>
  )
}

export default ListView

ListView.propTypes = {
  cards: PropTypes.array.isRequired
}