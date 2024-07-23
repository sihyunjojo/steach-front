import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sampleImage from "../../assets/sample-image.jpg";
import sampleImage2 from "../../assets/sample-image2.jpg";
import sampleImage3 from "../../assets/sample-image3.jpg";

// 김헌규 제작
// 이진송 수정 - 타입스크립트에 맞춰서 변경함
// 김헌규 수정 - 이미지 수정 및 carousel 크기 수정, 무한 롤링, 자동 슬라이드 구현
const HomePageCarousel: React.FC = () => {
  return (
    <Swiper
      loop={true}
      navigation={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper w-full h-[20rem]"
      speed={1800}
    >
      <SwiperSlide>
        <img src={sampleImage} alt="no-image" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sampleImage2} alt="no-image" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sampleImage3} alt="no-image" className="w-full h-full" />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomePageCarousel;
