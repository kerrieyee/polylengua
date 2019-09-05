import React from 'react'
import { listWordsApi } from '../../api/listWordsApi'
import { useAppContext } from '../../hooks/appContext'

const ListsIndex = () => {
  const { state, dispatch } = useAppContext()

  const click = (event) => {
    var list = state.listsInfo.lists.find(function (list) {
      return list.id === parseInt(event.target.dataset.id)
    })
    dispatch({ type: 'API_CALL_IN_PROGRESS' })
    listWordsApi.fetch(dispatch, list.id)
    dispatch({ type: 'CURRENT_LIST_SELECTED', currentList: list, selectedAction: 'listsShow' })
  }

  const lists = state.listsInfo.lists
  if (lists && lists.length) {
    return (
      <ul>
        {lists.map(list => (
          <li key={list.id} data-id={list.id} onClick={click}>
            {list.name} {list.description}
          </li>
        ))}
      </ul>
    )
  } else {
    return (<div> No Lists Available </div>)
  }
}

export default ListsIndex
