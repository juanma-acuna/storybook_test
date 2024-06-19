import PropTypes from 'prop-types';

function Button({ label, backgroundColor = '#0F8ADE', color = '#FFFFFF', size = 'md', onClick }) {
  let scale = 1;
  if (size === 'sm') {
    scale = 0.7;
  } else if (size === 'lg') {
    scale = 1.5;
  }

  const style = {
    backgroundColor,
    color,
    padding: `${scale * .8}rem ${scale * 1.2}rem`,
    fontSize: `${scale * 1}rem`,
    border: 'none',
    borderRadius: '12px'
  }

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func
}

export default Button;