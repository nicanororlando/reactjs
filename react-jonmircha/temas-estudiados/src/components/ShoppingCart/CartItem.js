import React from 'react';

const CartItem = ({ data, delFromCart }) => {
  const { id, name, price, cant } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {cant} = ${price * cant}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar uno</button>
      <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
      <hr />
    </div>
  );
};

export default CartItem;
