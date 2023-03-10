import React from 'react';

import minus from "../../assets/minus.svg";


const Decrement = ({setCount}) => {
  return (
    <div onClick={setCount} className="p-4">
        <img src={minus} alt="minus"/>
    </div>
  )
}

export default Decrement;