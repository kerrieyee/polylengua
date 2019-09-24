import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'


const SquareButton = ({ type, text, value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  }
  return (
    <div className={`${styles.button} ${styles[type]}`} onClick={handleClick}>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default SquareButton

SquareButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'warning', 'success', 'inv_success']),
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  onClick: PropTypes.func.isRequired
}
