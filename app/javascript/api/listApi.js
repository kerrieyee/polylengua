export const listApi = {
  fetchAll (dispatch) {
    return fetch('/api/v1/lists')
      .then(res => res.json())
      .then((result) => {
        dispatch({ type: 'FETCH_LISTS_SUCCESS', lists: result })
      }, (error) => { console.log(error) })
  }
}
