import { Button, Nav, Navbar } from "react-bootstrap";
import Footer from "./components/main/Footer.tsx";
import NavBar from "./components/main/NavBar.tsx";
import Card from "./components/main/Card.tsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage.tsx";
import SignUpPage from "./pages/user/SignUpPage/SignUpPage.tsx";
import HomePage from "./pages/main/HomePage.tsx";
import JosihyeonTest from "./tests/JosihyeonTest.tsx"

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user/login" element={<LoginPage />}></Route>
        <Route path="/user/signup" element={<SignUpPage />}></Route>
        <Route path="/JosihyeonTest" element={<JosihyeonTest />}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}
