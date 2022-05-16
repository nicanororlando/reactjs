import { TYPES } from 'actions/reducer/shopping.actions';
import React, { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer,
} from 'reducers/reducer/shopping.reducer';
import CartItem from 'components/ShoppingCart/CartItem';
import ProductItem from 'components/ShoppingCart/ProductItem';

const ReducerShop = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  const delFromCart = (id, all = false) => {
    if (all) dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    else dispatch({ type: TYPES.REMOVE_ONE_TO_CART, payload: id });
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <div>
      <h2>Carrito de compras utilizando REDUCERS</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product, index) => (
          <ProductItem
            key={index.toString()}
            data={product}
            addToCart={addToCart}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        {cart.map((item, index) => (
          <CartItem
            key={index.toString()}
            data={item}
            delFromCart={delFromCart}
          />
        ))}
        <button className="clean" onClick={clearCart}>
          Limpiar carrito
        </button>
      </article>
    </div>
  );
};

export default ReducerShop;
