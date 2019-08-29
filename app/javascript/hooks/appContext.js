import { useContext } from 'react'
import { AppContext } from '../providers/appProvider'

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  return appContext
}
