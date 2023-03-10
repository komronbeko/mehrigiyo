import React from 'react';

import plus from "../../assets/add.svg";


const Increment = ({setCount}) => {
  return (
    <div>
        <img onClick={setCount} src={plus} alt="plus" />
    </div>
  )
}

export default Increment;