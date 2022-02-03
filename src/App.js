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
import Launcher from "./shared/components/StaticContent/Launcher";
import ContactSupport from "./modules/ContactUs/ContactSupport";
import PrivacyPolicy from "./shared/components/StaticContent/PrivacyPolicy";
import TermsAndConditions from "./shared/components/StaticContent/TermsAndConditions";
import Inventory from "./modules/Inventory/Inventory";
import Settings from "./modules/Account/Settings";
import Notifications from "./modules/Account/Notifications";

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
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/launcher-eula" element={<Launcher />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/account" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
