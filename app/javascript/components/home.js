import React, { useEffect } from 'react'
import { listApi } from '../api/listApi'
import { useAppContext } from '../hooks/appContext'
import { componentList, currentComponent } from './componentRouting'

const Home = () => {
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    listApi.fetchAll(dispatch)
  }, [])

  const ComponentName = componentList[currentComponent(state)]
  return (<ComponentName/>)
}

export default Home
