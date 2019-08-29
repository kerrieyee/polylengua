const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case 'API_CALL_IN_PROGRESS':
      return { callInProgress: true }
    case 'FETCH_LIST_WORDS_SUCCESS':
      return { callInProgress: false }
    case 'FETCH_LISTS_SUCCESS':
      return { callInProgress: false }
    case 'EDIT_LIST_SUCCESS':
      return { callInProgress: false }
    default:
      return state
  }
}
export default apiReducer
