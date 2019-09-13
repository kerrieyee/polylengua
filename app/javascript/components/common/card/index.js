import React from 'react'
import styles from './styles'


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
