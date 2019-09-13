import React from 'react'
import { useAppContext } from '../../hooks/appContext'
import Card from '../common/card/index'
import SquareButton from '../common/SquareButton/index'
import styles from './styles'


const StudySessionsShow = () => {
  const { state, dispatch } = useAppContext()
  const changeDisposition = () => {
    dispatch({ type: 'CHANGE_CARD_DISPOSITION' })
  }

  const cardStudied = (result) => {
    dispatch({ type: 'CARD_STUDIED', result: result })
  }

  const pauseSession = (result) => {
    dispatch({ type: 'PAUSE_SESSION', result: result })
  }

  return (
    <div>
      <Card word={state.studySessions.currentWord} disposition={state.studySessions.currentDisposition} onClick={changeDisposition} />
      <div className={styles.button_container}>
        <SquareButton type='warning' text='Study Again' value='incorrect' onClick={cardStudied} />
        <SquareButton type='success' text='Got It!' value='correct' onClick={cardStudied} />
      </div>
    </div>
  )
}

export default StudySessionsShow
