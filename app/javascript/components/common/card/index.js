import React from 'react'
import styles from './styles'


const Card = ({ word, disposition }) => {
  return (
    <div className={styles.body}>
      {disposition}
    </div>
  )
}

export default Card
