import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import "swiper/css";

const Banner = () => {
  return (
    <>
      <SwiperStyle className="mySwiper">
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1708721205323-98eaaa0482ac?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1708169652663-0e71cf739405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1564473185935-58113cba1e80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </SwiperStyle>
    </>
  );
};

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 348px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export default Banner;
