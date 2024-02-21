import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      height={"400px"}
    >
      <SwiperSlide>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias amet
        voluptas aspernatur nihil qui dolore sed tempora. Eum cum ad saepe
        reprehenderit iure deleniti temporibus beatae doloremque iusto maiores!
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
