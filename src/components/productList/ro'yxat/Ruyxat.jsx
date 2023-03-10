import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ro'yxat.scss";
import { Pagination } from "swiper";
import SwSlide from "../SwipperSlides/swipperSlide";
import { ContextMain } from "../../../context/context";
import Details from "../../Details/Details";
const Ruyxat = () => {
  const { relatedToModal } = useContext(ContextMain);
  const { details } = relatedToModal;
  return (
    <>
      {details ? (
        <div className="header__openKirish">
          <Details />
        </div>
      ) : null}
      <Swiper pagination={true} modules={[Pagination]} className="swipers">
        <SwiperSlide>
          <SwSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SwSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SwSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SwSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SwSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Ruyxat;
