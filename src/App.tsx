import { Button, Nav, Navbar } from "react-bootstrap";
import Footer from "./components/main/Footer.tsx";
import NavBar from "./components/main/NavBar.tsx";
import Card from "./components/main/Card.tsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage.tsx"
import SignUpPage from "./pages/user/SignUpPage.tsx"
import HomePage from "./pages/main/HomePage.tsx"


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/SignUp' element={<SignUpPage />}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  )
}