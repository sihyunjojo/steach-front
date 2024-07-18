import HotLectures from "../../components/main/HotLectures.tsx";
import HomePageCarousel from "../../components/main/Carousel.tsx";
import Subjects from "../../components/main/Subjects.tsx";
import LatestLectures from "../../components/main/LatestLectures.tsx";

const HomePage: React.FC = () => {
  return (
    <div>
      <HomePageCarousel />
      <Subjects />
      <HotLectures />
      <LatestLectures />
    </div>
  );
}

export default HomePage;