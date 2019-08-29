const listWordsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_LIST_WORDS_SUCCESS':
      return { ...state, words: action.result }
    default:
      return state
  }
}
export default listWordsReducer
