import React, { useState } from "react";
import HotLectures from "../../components/main/HotLectures.tsx";
import HomePageCarousel from "../../components/main/Carousel.tsx";
import Subjects from "../../components/main/Subjects.tsx";
import LatestLectures from "../../components/main/LatestLectures.tsx";
import { ToastContainer } from "react-toastify";

const HomePage: React.FC = () => {
  const [iframeVisible, setIframeVisible] = useState(true);

  const toggleIframe = () => {
    setIframeVisible(!iframeVisible);
  };

  return (
    <div className="relative grid grid-cols-12 bg-white">
      {iframeVisible && (
        <iframe
        src="https://udify.app/chatbot/eBJf384o9dllxGpg"
        style={{ width: "25%", height: "70%", minHeight: "100px", position: "fixed", bottom: 0, right: 0, zIndex: 50, borderRadius: "5px",
          }}
          allow="microphone"
        ></iframe>
      )}
      <button
        onClick={toggleIframe}
        style={{
          position: "fixed",
          bottom: iframeVisible ? "70%" : "0",
          right: "0",
          zIndex: 51,
          backgroundColor: "blue",
          color: "white",
          padding: "4px",
          fontSize: "14px",
          width: iframeVisible ? "60px" : "80px", // 버튼 너비 조건부 조절
          height: "25px",
          borderRadius: "5px",
        }}
      >
        {iframeVisible ? "내리기" : "챗봇 올리기"}
      </button>
      <div className="col-span-12">
        <HomePageCarousel />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-10">
        <ToastContainer />
        <Subjects />
        <HotLectures />
        <LatestLectures />
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default HomePage;
