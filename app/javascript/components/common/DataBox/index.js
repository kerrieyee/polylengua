import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'


const DataBox = ({ color, mainText, subText, onClick }) => {
  const handleClick = () => {
    onClick(value);
  }
  return (
    <div className={`${styles.box} ${styles[color]}`} onClick={handleClick}>
      <div className={styles.text}>
        <div >{mainText}</div>
        <div className={styles.subtext}>{subText}</div>
      </div>
    </div>
  )
}

export default DataBox

DataBox.propTypes = {
  color: PropTypes.string.isRequired,
  subText: PropTypes.string,
  mainText: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
