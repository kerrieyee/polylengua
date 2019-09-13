import React from 'react'
import styles from './styles'


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
