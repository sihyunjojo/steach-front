import HotLectures from "../../components/main/HotLectures.tsx";
import HomePageCarousel from "../../components/main/Carousel.tsx";
import Subjects from "../../components/main/Subjects.tsx";
import LatestLectures from "../../components/main/LatestLectures.tsx";
import { ToastContainer } from "react-toastify";

const HomePage: React.FC = () => {
  return (
    <div className="bg-Beige">
      <ToastContainer />
      <HomePageCarousel />
      <Subjects />
      <HotLectures />
      <LatestLectures />
    </div>
  );
};

export default HomePage;
