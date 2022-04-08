import React, { createContext, useReducer } from 'react'
import { initialState, RootReducer } from 'store/reducers/RootReducer'

export const RootContext = createContext()

export default ({ children }) => {
  const [state, dispatch] = useReducer(RootReducer, initialState)

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  )
}
