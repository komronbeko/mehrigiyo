import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";


import "./Login.scss";

const Login = () => {
    const [value, setValue] = useState("+998");
  return (
    <form className="form-1">
        <div className="form-1__labels">
          <p>
          Telefon raqam
          </p>
          <PhoneInput required={true} defaultCountry="UZ"  value={value} onChange={setValue} />
        </div>
        <div className="form-1__labels">
          <p>
          Parol 
          </p>
          <input type="password" required={true}/>
        </div>
        <button>Tizimga kirish</button>
      </form>
  )
}

export default Login