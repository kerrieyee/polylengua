import React from 'react'
import { useAppContext } from '../../hooks/appContext'
import Card from '../common/card/index'
import SquareButton from '../common/SquareButton/index'
import NavBar from '../common/NavBar/index'
import styles from './styles'
import { studySessionsApi } from '../../api/studySessionsApi'



const StudySessionsShow = () => {
  const { state, dispatch } = useAppContext()
  const changeDisposition = () => {
    dispatch({ type: 'CHANGE_CARD_DISPOSITION' })
  }

  const cardStudied = (result) => {
    dispatch({ type: 'CARD_STUDIED', result: result })
  }

  const pauseSession = (sessionId) => {
    studySessionsApi.pause(dispatch, sessionId)
  }

  const completeSession = (session) => {
    studySessionsApi.complete(dispatch, session)
  }

  let body

  if (state.studySessions.currentWord) {
    body = (
      <div>
        <Card word={state.studySessions.currentWord} disposition={state.studySessions.currentDisposition} onClick={changeDisposition} />
        <div className={styles.button_container}>
          <SquareButton type='warning' text='Study Again' value='incorrect' onClick={cardStudied} />
          <SquareButton type='success' text='Got It!' value='correct' onClick={cardStudied} />
        </div>
      </div>
    )
  } else {
    body = <SquareButton type='success' text='Done!' value={state.studySessions.session} onClick={completeSession} />
  }

  return (
    <div>
      <NavBar title={`${state.listsInfo.currentList.name}`} onClick={() => { pauseSession(state.studySessions.session.id) }} />
      {body}
    </div>
  )
}

export default StudySessionsShow
