import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";

const MainSlide = () => {
  return (
    <>
      <div></div>
    </>
  );
};

const SwiperWrap = styled(Swiper)`
  img {
    display: block;
    height: 630px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export default MainSlide;
