import React from 'react'
import { listWordsApi } from '../../api/listWordsApi'
import { useAppContext } from '../../hooks/appContext'
import NavBar from '../common/NavBar/index'
import styles from '../globalStyles'


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
  let body
  if (lists && lists.length) {
    body = (
      <ul className={styles.list}>
        {lists.map(list => (
          <li key={list.id} data-id={list.id} onClick={click} className={styles.list_item}>
            {list.name} {list.description}
          </li>
        ))}
      </ul>
    )
  } else {
    body = (<div> No Lists Available </div>)
  }

  return(
    <div>
      <NavBar title='My Lists'/>
      {body}
    </div>
  )
}

export default ListsIndex
