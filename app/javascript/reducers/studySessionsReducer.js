const startStudySessionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_STUDY_SESSION_SUCCESS':
      return { ...state, session: action.result, currentWord: action.result.study_session_details[0] }
    default:
      return state
  }
}
export default startStudySessionsReducer
