import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import HeaderNavbar from "./modules/Layout/HeaderNavbar";
import Footer from "./modules/Layout/Footer";
import Careers from "./modules/Home/Careers";
import GamesList from "./modules/Store/GamesList";
import Nodes from "./modules/Home/Nodes";
import About from "./shared/components/StaticContent/AboutUs";
import Games from "./modules/Games/Games";
import GetTrack from "./modules/GetTrack/GetTrack";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/store" element={<GamesList />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/get-track" element={<GetTrack />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
