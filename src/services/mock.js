import { categories, populars, products } from './mockData'

export const getCategories = async () => {
  return categories
}

export const getPopular = async () => {
  return populars
}

export const getDetails = async ({ id }) => {
  return products.filter(item => item.id === id)
}
