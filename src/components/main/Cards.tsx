import React, { useState } from "react";
import {
  Card,
  Heading,
  CardBody,
  Stack,
  Text,
  Image,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Cards() {
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

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(samples.length / itemsPerPage)
    );
  };

  const currentItems = samples.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="flex justify-center">
      <Box>
        <header className="font-bold text-5xl m-3">
          <h1>요즘 뜨는 강의</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {currentItems.map((sample, index) => (
            <Card key={index} className="border-2 m-3">
              <CardBody>
                <Image src={sample.image} alt="no-image" borderRadius="lg" />
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
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={handleNextPage}
            aria-label="Next page"
          />
        </div>
      </Box>
    </section>
  );
}
