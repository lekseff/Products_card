import PropTypes from 'prop-types';

function ShopItem(props) {

  const {name, price, color, img } = props.card

  return (
    <div className="row product">                    
      <div className="product__image-row">
        <img src={img} alt={name}/>
      </div>
      <h2 className="product__title">{name}</h2>
      <p className="product__color">{color}</p>
      <p className="product__price">${price}</p>
      <button className="product__button-add">Add to Cart</button>
    </div>
  )
}

export default ShopItem

ShopItem.propTypes = {
  card: PropTypes.object.isRequired
}
