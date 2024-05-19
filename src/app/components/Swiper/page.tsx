"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperDemo(props: any) {
  const images = props && props.images ? props.images : [];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image: any, index: any) => {
          return (
            /* (condition) ? true : false */

            <SwiperSlide
              key={index}
              //   className={
              //     index == current
              //       ? "carousel_card carousel_card-active"
              //       : "carousel_card"
              //   }
            >
              <img className="card_image" src={image.image} alt="" />
              {/* <div className="card_overlay">
                <h2 className="card_title">{image.title}</h2>
              </div> */}
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
