import ListsIndex from './lists/index'
import ListsShow from './lists/show'
import Loading from './loading'

export const componentList = {
  listsIndex: ListsIndex,
  listsShow: ListsShow,
  loading: Loading
}

export const currentComponent = (currentState) => {
  if (currentState.api.callInProgress) {
    return 'loading'
  } else if (currentState.listsInfo.selectedAction) {
    return currentState.listsInfo.selectedAction
  } else {
    return 'listsIndex'
  }
}
