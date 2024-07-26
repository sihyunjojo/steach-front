import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imageUrls = [
  "https://cdn.m-i.kr/news/photo/202405/1119678_887147_344.jpg",
  "https://mblogthumb-phinf.pstatic.net/MjAyNDAxMzFfMTE5/MDAxNzA2NjkwOTQ1NjY1.DE4CKXk67V-GF8veQ4uGeWY_oEbwBLgf2pCXCWDRDwkg.32FUNPUbJAfEuHGVlL0JAcfgoIdM75KBlOuv6EFg5HEg.PNG.bee4sunset/%EB%A7%88%EB%A3%A8_%EC%98%88%EC%8B%9C-01.png?type=w800",
  "https://i.ytimg.com/vi/NhRUZyZGU_E/maxresdefault.jpg",
  "https://i.ytimg.com/vi/uYP8tzntElI/mqdefault.jpg"
];

const generateSlides = (urls: string[]) => {
  return urls.map((url, index) => (
    <SwiperSlide key={index}>
      <img src={url} alt={`slide-${index}`} style={styles.image} />
    </SwiperSlide>
  ));
};

const HomePageCarousel: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .mySwiper {
          width: 100%;
          height: 30rem;
        }

        .carousel-image {
          display: block;
          width: auto;
          height: 100%;
          max-width: 100%;
          margin: 0 auto;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        speed={1800}
      >
        {generateSlides(imageUrls)}
      </Swiper>
    </>
  );
};

const styles = {
  image: {
    display: 'block',
    width: 'auto',
    height: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default HomePageCarousel;


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import sampleImage from "../../assets/sample-image.jpg";
// import sampleImage2 from "../../assets/sample-image2.jpg";
// import sampleImage3 from "../../assets/sample-image3.jpg";

// // 김헌규 제작
// // 이진송 수정 - 타입스크립트에 맞춰서 변경함
// // 김헌규 수정 - 이미지 수정 및 carousel 크기 수정, 무한 롤링, 자동 슬라이드 구현
// const HomePageCarousel: React.FC = () => {
//   return (
//     <Swiper
//       loop={true}
//       navigation={true}
//       autoplay={{
//         delay: 7000,
//         disableOnInteraction: false,
//       }}
//       modules={[Autoplay, Navigation]}
//       className="mySwiper w-full h-[20rem]"
//       speed={1800}
//     >
//       <SwiperSlide>
//         <img src={sampleImage} alt="no-image" className="w-full h-full" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={sampleImage2} alt="no-image" className="w-full h-full" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={sampleImage3} alt="no-image" className="w-full h-full" />
//       </SwiperSlide>
//     </Swiper>
//   );
// };
// export default HomePageCarousel;