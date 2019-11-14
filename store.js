import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import data from './data.json'

let cart = []
let needUpdateCartState = false

// on the client we unload the cart data from localStorage
if (typeof localStorage !== 'undefined') {
  cart = localStorage.getItem('cart')
  try {
    cart = JSON.parse(cart)
    needUpdateCartState = true
  } catch (error) {

  }
}

const districtValues = [
  "В черте города",
  "Панковка",
  "Сырково",
  "Деревяницы",
  "Деревяницы(за новым мостом)",
  "Новая Мельница",
  "Плетниха",
  "п. Волховец",
  "мкр. Волховский",
  "завод Акрон",
  "Юрьевское шоссе"
]

const initialState = {
  districtValues,
  district: districtValues[0],
  isMenuOpen: false,
  categories: data.data.categories,
  sales: data.data.sales,
  featured: data.data.featured,
  products: data.data.products,
  cart: Array.isArray(cart) ? cart : [],
  isCartModalOpen: false,
}

const reducer = (state = initialState, action) => {
  if (needUpdateCartState) {
    state.cart = initialState.cart;
    needUpdateCartState = false;
  }

  switch (action.type) {
    case 'SET_DISTRICT':
      return {
        ...state,
        district: action.district
      }
    case 'SET_MENU_OPEN':
      return {
        ...state,
        isMenuOpen: !!action.isMenuOpen
      }
    case 'SET_CART':
      localStorage.setItem('cart', JSON.stringify(action.cart))
      return {
        ...state,
        cart: action.cart
      }
    case 'SET_CART_MODAL_OPEN':
      return {
        ...state,
        isCartModalOpen: !!action.isCartModalOpen
      }
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
