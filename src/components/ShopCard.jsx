import PropTypes from 'prop-types';

function ShopCard(props) {
  const {name, price, color, img } = props.card

  return (
    <div className="card">
        <div className="product__heder">
            <h2 className="product__title mb10">{name}</h2>
            <p className="product__color">{color}</p>
        </div>
        <div className="product__image">
            <img src={img} alt={name} />
        </div>      
        <div className="product__footer">
            <p className="product__price">${price}</p>
            <button className="product__button-add">Add to Cart</button>
        </div>
    </div>
  )
}

export default ShopCard

ShopCard.propTypes = {
  card: PropTypes.object.isRequired
}