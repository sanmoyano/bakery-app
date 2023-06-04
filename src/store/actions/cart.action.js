import { FIREBASE } from "../../constants";
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

export const confirmOrder = ({ cart, total }) => {
  return async (dispatch) => {
    try {
      const req = await fetch(`${FIREBASE}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: cart,
          total,
        }),
      });
      const res = await req.json();

      dispatch({
        type: CONFIRM_ORDER,
        res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
