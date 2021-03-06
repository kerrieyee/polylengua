const startStudySessionsReducer = (state = {}, action) => {
  const initialDisposition = 'english'
  const initialState = {
    session: null,
    currentWord: null,
    currentDisposition: initialDisposition,
    correct: 0,
    incorrect: 0
  }

  switch (action.type) {
    case 'CARD_STUDIED':
      const index = state.session.study_session_details.findIndex(word => word.word_id === state.currentWord.word_id && word.word_type === state.currentWord.word_type)
      state.currentWord.result = action.result
      let correct = state.correct
      let incorrect = state.incorrect
      if (action.result === 'correct') {
        correct += 1
      } else if (action.result === 'incorrect') {
        incorrect += 1
      }
      state.session.study_session_details[index] = state.currentWord
      let nextWord = state.session.study_session_details.find(word => word.result === null)
      return { ...state, currentWord: nextWord, currentDisposition: initialDisposition, correct: correct, incorrect: incorrect }
    case 'CHANGE_CARD_DISPOSITION':
      const disposition = state.currentDisposition === 'english' ? 'spanish' : 'english'
      return { ...state, currentDisposition: disposition}
    case 'CREATE_STUDY_SESSION_SUCCESS':
      return { ...initialState, session: action.result, currentWord: action.result.study_session_details[0] }
    case 'CLEAR_SESSION':
      return initialState
    default:
      return initialState
  }
}
export default startStudySessionsReducer
