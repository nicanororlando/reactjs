import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_TO_CART,
} from 'types';

export const initialState = {
  //Esta informacion la tenemmos en nuestra variable 'state'
  products: [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 },
    { id: 6, name: 'Producto 6', price: 600 },
  ],
  cart: [],
};

export default function reduxShoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(state);
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemCart = state.cart.find((item) => item.id === newItem.id);

      // Retorno un objeto que tiene todos los estados, y todos los carritos + el nuevo
      return itemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemCart.id
                ? {
                    ...item,
                    cant: item.cant + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, cant: 1 }],
          };
    }
    case REMOVE_ONE_TO_CART: {
      let itemCart = state.cart.find((item) => item.id === action.payload);
      let newItems = false;
      if (itemCart.cant === 1)
        newItems = state.cart.filter((item) => item.id !== itemCart.id);

      return newItems
        ? {
            ...state,
            cart: newItems.map((item) => item),
          }
        : {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemCart.id
                ? {
                    ...item,
                    cant: item.cant - 1,
                  }
                : item
            ),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      let newItems = state.cart.filter((item) => item.id !== action.payload);

      return {
        ...state,
        cart: newItems.map((item) => item),
      };
    }
    case CLEAR_CART:
      return initialState;
    // return { ...state, cart: [] };

    default:
      return state;
  }
}
