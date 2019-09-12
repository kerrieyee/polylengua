import ListsIndex from './lists/index'
import ListsShow from './lists/show'
import StudySessionsShow from './studySessions/show'
import Loading from './loading'

export const componentList = {
  listsIndex: ListsIndex,
  listsShow: ListsShow,
  studySessionsShow: StudySessionsShow,
  loading: Loading
}

export const currentComponent = (currentState) => {
  if (currentState.api.callInProgress) {
    return 'loading'
  } else if (currentState.studySessions && currentState.studySessions.session) {
    return 'studySessionsShow'
  } else if (currentState.listsInfo.selectedAction) {
    return currentState.listsInfo.selectedAction
  } else {
    return 'listsIndex'
  }
}
