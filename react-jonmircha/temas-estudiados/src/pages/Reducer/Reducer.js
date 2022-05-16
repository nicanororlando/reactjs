import ContadorReducerMejorado from 'components/ContadorReducer/ContadorReducerMejorado';
import ContadorReducer from 'components/ContadorReducer/ContadorReducer';
import React from 'react';

const Reducer = () => {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <ContadorReducerMejorado />
      <hr />
      <ContadorReducer />
    </div>
  );
};

export default Reducer;
