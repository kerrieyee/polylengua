import React, { useEffect } from 'react'
import { listApi } from '../api/listApi'
import { useAppContext } from '../hooks/appContext'
import { componentList, currentComponent } from './componentRouting'
import styles from './globalStyles'

const Home = () => {
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    listApi.fetchAll(dispatch)
  }, [])

  const ComponentName = componentList[currentComponent(state)]
  return (
    <div className={styles.base}>
      <ComponentName/>
    </div>
  )
}

export default Home
