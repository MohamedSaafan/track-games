import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import HeaderNavbar from "./modules/Layout/HeaderNavbar";
import Footer from "./modules/Layout/Footer";
import Careers from "./modules/Home/Careers";
import GamesList from "./modules/Home/GamesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/games" element={<GamesList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
