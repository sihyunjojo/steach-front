import { Button } from "react-bootstrap";
import Footer from "./components/main/Footer.tsx";
import Spinner from "./components/main/Spinner.tsx";
import NavBar from "./components/main/NavBar.tsx";
import Card from "./components/main/Card.tsx";


export default function App() {
  return (
    <div>
      <NavBar></NavBar>
    <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>
      <Card />
      <Button>gdgd</Button>
      <Footer></Footer>
    </div>
  )
}