import PropTypes from 'prop-types';

function Stack({ children, spacing = 2, direction = 'row', wrap = false }) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
  wrap: PropTypes.bool
}

export default Stack;