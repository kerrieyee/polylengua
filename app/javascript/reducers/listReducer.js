const listReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_LIST_SUCCESS':
      return { ...state, lists: action.lists }
    case 'FETCH_LISTS_SUCCESS':
      return { ...state, lists: action.lists }
    case 'CURRENT_LIST_SELECTED':
      return { ...state, currentList: action.currentList, selectedAction: action.selectedAction }
    case 'EDIT_LIST_SUCCESS':
      return { ...state, lists: action.lists }
    default:
      return state
  }
}
export default listReducer
