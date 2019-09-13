import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'


const Card = ({ word, disposition, onClick}) => {
  if (disposition === 'spanish') {
    return (
      <div className={styles.card} onClick={onClick}>
        <div className={styles.text}>
          <p>{word.word}</p>
          <p>({word.mood} - {word.tense})</p>
          <p>{word.gender}</p>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.text}>{word.translation}</div>
    </div>
  )
}

export default Card

Card.propTypes = {
  word: PropTypes.object.isRequired,
  disposition: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
