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
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
