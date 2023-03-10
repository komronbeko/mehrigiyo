import React from "react";

const Registration = () => {
  return (
    <form className="form-1">
      <div className="form-1__labels">
        <input type="text" placeholder="Foydalanuvchi nomi" />
      </div>
      <div className="form-1__labels">
        <p>Parolni o’ylab toping</p>
        <input type="password" required={true} />
      </div>
      <div className="form-1__labels">
        <p>Elektron pochta (optinal)</p>
        <input type="email" />
      </div>
      <p className="form-1__confirm">
        “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz <br />
        <span>Foydalanish shartlarini qabul qilgan xisoblanasiz.</span>
      </p>
      <button>Tizimga kirish</button>
    </form>
  );
};

export default Registration;
