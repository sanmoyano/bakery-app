import { carTypes } from "../types/cart.types";

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART } = carTypes;

export const addTocCart = (product) => ({
  type: ADD_TO_CART,
  item: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmOrder = (order) => ({
  type: CONFIRM_ORDER,
  order,
});
