import PropTypes from 'prop-types';

function IconSwitch(props) {
  const {icon} = props;
  return (
      <span 
        className="material-icons md-36"
        onClick={props.onSwitch}
      >
        {icon}
      </span>
  )
}

export default IconSwitch

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired
}