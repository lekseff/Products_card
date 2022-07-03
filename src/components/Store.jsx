import {useState} from 'react'
import CardsView from './CardsView'
import ListView from './ListView'
import IconSwitch from './IconSwitch'
import products from '../js/products'


function Store() {

  const [icon, setIcon] = useState('view_module')
  const cards = products.slice()
  const handleSwitch = () => {
    setIcon((prevIcon) => (prevIcon === 'view_module') ? 'view_list' : 'view_module')
  }

  return (
    <div className="store">
      <div className="store_switch-icon">
        <IconSwitch icon={icon} onSwitch={handleSwitch}/>
      </div>
      {(icon === 'view_list') && <ListView cards={cards}/>}
      {(icon === 'view_module') && <CardsView cards={cards} />}
    </div>
  )
}

export default Store
