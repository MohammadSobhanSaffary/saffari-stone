import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

function Slider (){
    return(
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        centeredSlides={true}
        touchStartPreventDefault={false}
        spaceBetween={270}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="!flex justify-center items-center my-10">
          <img src="/assets/photos/11.jpeg" className="!w-[80%] md:!w-[950px] !h-[250px] md:!h-[450px] rounded-[20px] border-2 border-solid border-[#514E4E] " />
        </SwiperSlide>
        <SwiperSlide className="!flex justify-center items-center my-10 ">
          <img src="/assets/photos/2.jpg" className="!w-[80%] md:!w-[950px] !h-[250px] md:!h-[450px] rounded-[20px] border-2 border-solid border-[#514E4E]" />
        </SwiperSlide>
        <SwiperSlide className="!flex justify-center items-center my-10">
          <img src="/assets/photos/22.jpeg" className="!w-[80%] md:!w-[950px] !h-[250px] md:!h-[450px] rounded-[20px] border-2 border-solid border-[#514E4E] " />
        </SwiperSlide>
      </Swiper>
    )
}

export default Slider