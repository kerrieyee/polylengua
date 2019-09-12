import React from 'react'
import { useAppContext } from '../../hooks/appContext'

const StudySessionsShow = () => {
  const { state, dispatch } = useAppContext()
  let firstWord = state.studySessions.currentWord

  return (
    <div>
      {firstWord.word}
    </div>
  )
}

export default StudySessionsShow
