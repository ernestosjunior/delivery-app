import { faker } from '@faker-js/faker'

export const categories = [
  {
    key: 'pizza',
    title: 'Pizza',
    icon: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649459678/pizza-icon_1_vre0aw.png',
  },
  {
    key: 'soda',
    title: 'Soft Drinks',
    icon: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649459886/soda-icon_bfqd29.png',
  },
  {
    key: 'shrimp',
    title: 'Seafood',
    icon: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649459919/shrimp-icon_hpytkq.png',
  },
  {
    key: 'iceCreams',
    title: 'Ice Creams',
    icon: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649459989/iceCreams_rq4kbe.png',
  },
  {
    key: 'bread',
    title: 'Breads',
    icon: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649459988/bread_rjg2xx.png',
  },
]

const one = faker.datatype.uuid()
const two = faker.datatype.uuid()
const three = faker.datatype.uuid()

export const populars = [
  {
    id: one,
    name: 'Primavera Pizza',
    evaluation: 5.0,
    weight: 540,
    img: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649460275/pizza1_rnptms.png',
  },
  {
    id: two,
    name: 'Italian Pizzaria',
    evaluation: 4.9,
    weight: 480,
    img: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649460282/pizza2_rxexg3.png',
  },
  {
    id: three,
    name: 'Mama Mia Pizzaria',
    evaluation: 4.8,
    weight: 540,
    img: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649460296/pizza3_bou03f.png',
  },
]

export const products = [
  {
    id: one,
    name: 'Primavera Pizza',
    price: '5.99',
    size: 'Medium 14”',
    crust: 'Thin Crust',
    deliveryIn: '30',
    ingredients: ['tomato', 'garlic', 'ham', 'cheese'],
    img: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649460275/pizza1_rnptms.png',
  },
  {
    id: two,
    name: 'Italian Pizzaria',
    price: '7.99',
    size: 'Medium 14”',
    crust: 'Thin Crust',
    deliveryIn: '50',
    ingredients: ['tomato', 'garlic', 'ham', 'cheese'],
    img: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649460282/pizza2_rxexg3.png',
  },
  {
    id: three,
    name: 'Mama Mia Pizzaria',
    price: '7.99',
    size: 'Medium 14”',
    crust: 'Thin Crust',
    deliveryIn: '50',
    ingredients: ['tomato', 'garlic', 'ham', 'cheese'],
    img: 'https://res.cloudinary.com/dcgzbotx7/image/upload/v1649460296/pizza3_bou03f.png',
  },
]
