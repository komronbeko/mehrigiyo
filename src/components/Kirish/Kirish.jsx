import React, { useContext } from "react";
import "./Kirish.scss";
import CloseIcon from '@mui/icons-material/Close';
import {ContextMain} from "../../context/context";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Kirish = () => {
  const {relatedToModal} = useContext(ContextMain);
  const {setKirish, setLogin, login, setReg, reg} = relatedToModal;

  const handleLogin = ()=>{
    if (!login){
      setLogin(true)
      setReg(false)
    }
  }
  const handleReg = ()=>{
    if (!reg){
      setReg(true);
      setLogin(false)
    }
  }
  return (
    <div className="kirish">
      <div className="kirish__closeIcon" onClick={()=>setKirish(false)}>
        <CloseIcon/>
      </div>
      <div className="kirish__heading">
        <button className={login ? "kirish__focus" : ""} onClick={handleLogin}>Kirish</button>
        <button className={reg ? "kirish__focus" : ""} onClick={handleReg}>Ro'yxatdan o'tish</button>
      </div>
      {
        login ? 
        <Login/>
      : null
      }
      {
        reg ? 
        <Registration/>
        : null
      }
    </div>
  );
};

export default Kirish;
