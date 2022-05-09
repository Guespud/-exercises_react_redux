import React from "react";
import {depositar, retirar} from '../../store/deposito/action';
import {connect} from 'react-redux'

const Counter = () => {
  return (
    <div>
      <h1>amount: {}</h1>

      <button onClick={() =>depositar()} >depositar $10</button>
      <button onClick={() => retirar()} >retirar $10 </button>
    </div>
  );
};

// export default Counter;
export default connect(null,{depositar, retirar})(Counter);
