import { useContext } from 'react'
import { RootContext } from 'store/contexts/RootContext'

export const useRoot = () => {
  const { dispatch: RootDispatch, state: RootState } = useContext(RootContext)

  return {
    RootState,
    RootDispatch,
  }
}
