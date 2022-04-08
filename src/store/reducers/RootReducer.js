export const initialState = {
  selectedCategory: '',
}

export const RootReducer = (state, action) => {
  switch (action.type) {
    case 'setCategory':
      return { ...state, selectedCategory: action.payload.category }
      break
    default:
      return state
      break
  }
}
