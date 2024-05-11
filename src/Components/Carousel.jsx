// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="mt-12 px-10 py-12 rounded-3xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
