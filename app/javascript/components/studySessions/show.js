import React from 'react'
import { useAppContext } from '../../hooks/appContext'
import Card from '../common/card/index'

const StudySessionsShow = () => {
  const { state, dispatch } = useAppContext()
  let firstWord = state.studySessions.currentWord

  return (
    <div>
      <Card word={firstWord} disposition='front'>
    </div>
  )
}

export default StudySessionsShow
