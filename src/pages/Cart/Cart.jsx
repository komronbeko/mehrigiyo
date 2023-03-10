import React, { useCallback, useContext, useState } from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Increment from "../../utils/increment/Increment";
import Decrement from "../../utils/decrement/Decrement";
import phoneImg from "../../assets/animation_500_kznt7t90 1.png";
import messageImg from "../../assets/Group.png";
import savatchaImg from "../../assets/savatcha.svg";
import { ContextMain } from "../../context/context";

const Cart = () => {
  const { relatedToData, relatedToModal } = useContext(ContextMain);
  const { carts, setCarts } = relatedToData;
  const { setCount, count } = relatedToModal;

  const [filteredCart, setFilteredCart] = useState(carts);

  const increment = useCallback((id) => {
    filteredCart.map((item) =>
      item.id === id ? setCount((prev) => prev + 1) : item
    );
  }, []);

  const decrement = useCallback((id) => {
    filteredCart.map((item) => {
      if (item.id === id) {
        setCount((prev) => {
          if (prev >= 1) {
            return prev - 1;
          } else {
            return prev;
          }
        });
      }
    });
  }, []);

  const deleteFavourite = (id) => {
    const unDeletedData = filteredCart.filter((item) => item.id !== id);
    setFilteredCart(unDeletedData);
    setCarts(unDeletedData);
  };

  return (
    <div className="cart py-20">
      <div className="container relative">
        <p>
          Bosh sahifa / <span className="text-[#53B175]">Savatcha</span>
        </p>

        {filteredCart.length === 0 ? (
          <div>
            <h3>Savatcha</h3>
            <div className="cart__savatcha">
              <img className="" src={savatchaImg} alt="savatchaImg" />
              <span>0</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <h3 className="">Savatchada {carts.length} ta mahsulot bor</h3>
              <button className="px-4 py-2.5 bg-green-100 rounded-full">
                Buyurtmalar tarixi
                <ArrowRightAltOutlinedIcon
                  fontSize="medium"
                  className="text-green-600 ml-2"
                />
              </button>
            </div>
            <div className="cart__body">
              <div className="grid grid-cols-1 gap-4 w-full mb-24">
                {filteredCart.map((item) => (
                  <div
                    key={item.id}
                    className="cart__wrapper justify-between items-center py-5 px-8 border-2 border-gray-300 border-solid rounded-2xl"
                  >
                    <img
                      src={item.image}
                      alt="productImg"
                      className="w-20 h-20 rounded-xl"
                    />
                    <h5>
                      {item.name} <br /> <span>{item.type}</span>
                    </h5>
                    <div className="flex items-center justify-center">
                      <Decrement setCount={() => decrement(item.id)} />
                      <p className="mr-4 px-4 py-2 border-2 border-solid border-gray-300 rounded-lg font-bold text-lg">
                        {count}
                      </p>
                      <Increment setCount={() => increment(item.id)} />
                    </div>
                    <h4>
                      <span>{item.previous}</span> <br />
                      {item.price} uzs
                    </h4>
                    <DeleteOutlineOutlinedIcon
                      className="text-red-600"
                      onClick={() => deleteFavourite(item.id)}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-8 py-6 rounded-3xl border-2 border-solid border-gray-300 h-max flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p>Mahsulotlar &#40; {filteredCart.length} &#41;</p>
                  <p>182 000</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Chegirma</p>
                  <p>0</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Yetkazib berish</p>
                  <p>15 000</p>
                </div>
                <div className="flex items-center justify-between text-black">
                  <b className="font-bold">Umumiy</b>
                  <b className="font-bold">197 000 so'm</b>
                </div>
                <div className="flex flex-col gap-4 mt-1.5">
                  <button className="w-full py-2.5 rounded-full bg-green-600 text-white">
                    To'lovga o'tish
                  </button>
                  <button className="w-full py-2.5 rounded-full bg-green-100">
                    Menyuga qaytish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`flex flex-col items-end ${
            filteredCart.length === 0 ? "mt-96" : ""
          }`}
        >
          <img src={phoneImg} alt="phoneImg" /> <br />
          <img src={messageImg} alt="messageImg" className="-mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
