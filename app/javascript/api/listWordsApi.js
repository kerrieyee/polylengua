export const ListWordsApi = {
  fetch (dispatch, id) {
    return fetch('/api/v1/list_words?list_id=' + id)
      .then(res => res.json())
      .then((result) => {
        dispatch({ type: 'FETCH_LIST_WORDS_SUCCESS', result })
      }, (error) => { console.log(error) })
  }
}
