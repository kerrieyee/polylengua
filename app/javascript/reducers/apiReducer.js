const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case 'API_CALL_IN_PROGRESS':
    case 'FETCH_LIST_WORDS_SUCCESS':
    case 'FETCH_LISTS_SUCCESS':
    case 'CREATE_STUDY_SESSION_SUCCESS':
    case 'EDIT_LIST_SUCCESS':
      return { callInProgress: false }
    default:
      return state
  }
}
export default apiReducer
