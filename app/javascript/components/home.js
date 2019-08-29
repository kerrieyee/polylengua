import React, { useEffect } from 'react'
import { ListApi } from '../api/listApi'
import { useAppContext } from '../hooks/appContext'
import { componentList, currentComponent } from './componentRouting'

const Home = () => {
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    ListApi.fetchAll(dispatch)
  }, [])

  const ComponentName = componentList[currentComponent(state)]
  return (<ComponentName/>)
}

export default Home
