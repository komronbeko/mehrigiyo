import React, { useState } from "react";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import en from "react-phone-number-input/locale/en.json";
import PhoneInput from "react-phone-number-input";

const SignIn = () => {
  const [value, setValue] = useState();
  return (
    <div class="containerr">
      <input type="radio" name="tab" id="signin" checked="checked" />
      <input type="radio" name="tab" id="register" />
      <div class="tabs">
        <label class="tab" for="signin">
          <div class="text-auth auth">Kirish</div>
        </label>
        <label class="tab" for="register">
          <div class="text-auth auth">Ro’yxatdan o’tish </div>
        </label>
      </div>
      <div class="pages">
        <div class="page">
          <div class="input">
            <div class="title">Telefon raqam</div>
          </div>
          <PhoneInput
            flags={flags}
            className="inputt input"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            labels={en}
            rules={{ required: true }}
          />
          <div class="input">
            <div class="title">Parol</div>
            <input class="text" type="password" placeholder="" required/>
          </div>
          <div class="input">
            <input type="submit" value="Tizimga kirish" className="cursor-pointer hover:opacity-70"/>
          </div>
        </div>
        <div class="page signup">
          <div class="input">
            <div class="title">Foydalanuvchi nomi</div>
            <input class="text" type="text" placeholder="" required/>
          </div>
          <div class="input">
            <div class="title">Parolni o’ylab toping</div>
            <input class="text" type="password" placeholder="" required/>
          </div>
          <p className="text-center text-headerText text-xs pt-16">
            “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz
            <br />
            <strong className="text-auth text-center flex justify-center items-center">
              Foydalanish shartlarini qabul qilgan xisoblanasiz.
            </strong>
          </p>
          <div class="input">
            <input type="submit" value="Ro’yxatdan o’tish" className="cursor-pointer hover:opacity-70"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
