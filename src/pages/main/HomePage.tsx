import Footer from "../../components/main/Footer.tsx";
import NavBar from "../../components/main/NavBar.tsx";
import Cards from "../../components/main/Cards.tsx";
import HomePageCarousel from "../../components/main/Carousel.tsx";
import Subjects from "../../components/main/Subjects.tsx";

export default function HomePage() {
  return (
    <div>
      {/* <NavBar /> */}
      <HomePageCarousel />
      <Subjects />
      <Cards />
      <Footer />
    </div>
  );
}
