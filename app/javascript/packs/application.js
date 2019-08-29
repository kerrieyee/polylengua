// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import listReducer from '../reducers/listReducer'
import apiReducer from '../reducers/apiReducer'
import listWordsReducer from '../reducers/listWordsReducer'
import { AppProvider } from '../providers/appProvider'
import { useCombinedReducers } from '../hooks/useCombinedReducers'
import Home from '../components/home'

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    listsInfo: useReducer(listReducer, {}),
    listWords: useReducer(listWordsReducer, {}),
    api: useReducer(apiReducer, { callInProgress: true })
  })

  // errorReducer

  const value = { state, dispatch }

  return (
    <AppProvider value={value}>
      <Home/>
    </AppProvider>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
