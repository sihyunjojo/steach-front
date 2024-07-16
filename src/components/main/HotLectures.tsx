import { useState } from "react";
import {
  Card,
  Heading,
  CardBody,
  Stack,
  Text,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";

import { Swiper as SwiperClass } from "swiper/types";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

export default function HotLectures() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const samples = [
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "김호경의 Unity 강의",
      description: "게임 개발의 마스터가 되기 위한 강의",
      teacher: "김호경",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "김호경의 Unity 강의",
      description: "게임 개발의 마스터가 되기 위한 강의",
      teacher: "김호경",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "김호경의 Unity 강의",
      description: "게임 개발의 마스터가 되기 위한 강의",
      teacher: "김호경",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "김호경의 Unity 강의",
      description: "게임 개발의 마스터가 되기 위한 강의",
      teacher: "김호경",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "김호경의 Unity 강의",
      description: "게임 개발의 마스터가 되기 위한 강의",
      teacher: "김호경",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "박수진의 React 강의",
      description: "프론트엔드 개발의 기초와 심화",
      teacher: "박수진",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "이준호의 Python 강의",
      description: "백엔드 개발의 마스터가 되기 위한 강의",
      teacher: "이준호",
    },
  ];

  return (
    <section className="flex justify-center my-6">
      <Box className="container mx-16 px-16">
        <header className="font-bold text-5xl m-3">
          <h1>요즘 뜨는 강의</h1>
        </header>
        <Box className="flex justify-center">
          <Swiper
            onSlideChange={(e) => {
              // 시작 슬라이더인지 아닌지 boolean 반환
              setIsBeginning(e.isBeginning);
              // 마지막 슬라이더인지 아닌지 boolean 반환
              setIsEnd(e.isEnd);
            }}
            onSwiper={(e) => {
              setSwiper(e);
            }}
            slidesPerView={1}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="flex justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {samples.map((sample, index) => (
              <SwiperSlide key={index}>
                <Card className="border-2 m-3">
                  <CardBody>
                    <Image
                      src={sample.image}
                      alt="no-image"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3" className="p-2">
                      <Heading className="font-bold text-3xl">
                        {sample.title}
                      </Heading>
                      <Text>{sample.description}</Text>
                      <Text className="text-slate-500">
                        {sample.teacher} 선생님
                      </Text>
                    </Stack>
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      className="p-2 hover:text-orange-400"
                    >
                      자세히 보기
                    </Button>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </section>
  );
}
