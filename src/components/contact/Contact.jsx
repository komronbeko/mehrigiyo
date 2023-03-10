import React, { useState } from "react";
import "./contact.scss";
import bgImage from "../../assets/Bubble 2.png";
import ContactImg from "../../assets/Contact Animations.png";
import PhoneInput from "react-phone-number-input";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [value, setValue] = useState("+998");

  return (
    <div className="contact">
      <img src={bgImage} alt="bg-font" className="contact__bgFont" />
      <div className="contact__wrapper container">
        <div className="contact__left">
          <img src={ContactImg} alt="contact__left__Img" />
        </div>
        <div className="contact__right">
          <form className="form-1">
            <div className="contact__form__heading">
              <p>Biz bilan bog'lanish</p>
              <h3>So'rovingizni yuboring</h3>
            </div>
            <div className="form-1__labels">
              <input type="text" placeholder="Foydalanuvchi nomi" required/>
            </div>
            <div className="form-1__labels">
              <input type="email" placeholder="Elektron pochta" required/>
            </div>
            <div className="form-1__labels">
              <p style={{color: "#53B175"}}>Telefon raqam</p>
              <PhoneInput
                required
                defaultCountry="UZ"
                value={value}
                onChange={setValue}
              />
            </div>
            <button className="contact__form__submit">Xabar yuborish <SendIcon className="contact__form__submit__icon"/></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
