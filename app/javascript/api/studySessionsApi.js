export const studySessionsApi = {
  create (dispatch, listId) {
    return fetch('/api/v1/study_sessions', {
        method: 'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
        body: JSON.stringify({
          list_id: listId
        })
      })
      .then(res => res.json())
      .then((result) => {
        dispatch({ type: 'CREATE_STUDY_SESSION_SUCCESS', result: result })
      }, (error) => { console.log(error) })
  }
}
