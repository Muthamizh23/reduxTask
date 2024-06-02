import * as actionTypes from "./actionType";
import { products } from "../product";
const initialState = {
    getProductsData: products.products,
    getTotalData: 0,
};

const reducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case actionTypes.PRODUCTS:
      return {
        // ...state,
        getProductsData: action.getProductsRes,
      };

    case actionTypes.TOTAL:
      return {
        ...state,
        getTotalData: action.getTotalRes,
      };

    default:
      return state;
  }
};

export { reducer, initialState };
