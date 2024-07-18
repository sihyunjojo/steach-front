import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sampleImage from "../../assets/sample-image.jpg";
import sampleImage2 from "../../assets/sample-image2.jpg";
import sampleImage3 from "../../assets/sample-image3.gif";

// 김헌규 제작
// 이진송 수정 - 타입스크립트에 맞춰서 변경함
const HomePageCarousel: React.FC = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full h-96"
    >
      <SwiperSlide className="">
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
}
export default HomePageCarousel;