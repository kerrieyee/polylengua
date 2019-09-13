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
  },

  pause (dispatch, sessionId) {
    return fetch('/api/v1/study_sessions/' + sessionId, {
      method: 'PATCH',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
        body: JSON.stringify({
          session_id: sessionId,
          session_action: 'pause'
        })
      })
      .then(() => {
        dispatch({ type: 'CLEAR_SESSION' })
      }, (error) => { console.log(error) })
  },

  }
}
