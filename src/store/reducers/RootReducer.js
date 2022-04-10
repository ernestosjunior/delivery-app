export const initialState = {
  categories: [],
  popular: [],
  selectedCategory: '',
}

export const RootReducer = (state, action) => {
  switch (action.type) {
    case 'setCategory':
      return { ...state, selectedCategory: action.payload.category }
      break
    case 'setCategories':
      return { ...state, categories: action.payload.categories }
      break
    case 'setPopular':
      return { ...state, popular: action.payload.popular }
      break
    default:
      return state
      break
  }
}
