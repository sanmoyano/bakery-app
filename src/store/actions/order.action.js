import { FIREBASE } from "../../constants";
import { oderTypes } from "../types";

const { DELETE_ORDER, GET_ORDERS } = oderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const req = await fetch(`${FIREBASE}/orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await req.json();

      const orders = Object.keys(res).map((key) => ({
        ...res[key],
        id: key,
      }));
      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const req = await fetch(`${FIREBASE}/orders/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await req.json();

      dispatch({
        type: DELETE_ORDER,
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
