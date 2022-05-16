import React from 'react';
import CartItem from 'components/ShoppingCart/CartItem';
import ProductItem from 'components/ShoppingCart/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  delFromCart,
} from 'actions/redux/redux.shopping.actions';

const ReduxShop = () => {
  const state = useSelector((state) => state);
  const { products, cart } = state.shopping;

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito de compras utilizando REDUX</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product, index) => (
          <ProductItem
            key={index.toString()}
            data={product}
            addToCart={(id) => dispatch(addToCart(id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        {cart.map((item, index) => (
          <CartItem
            key={index.toString()}
            data={item}
            delFromCart={(id, all) => dispatch(delFromCart(id, all))}
          />
        ))}
        <button className="clean" onClick={() => dispatch(clearCart())}>
          Limpiar carrito
        </button>
      </article>
    </div>
  );
};

export default ReduxShop;
