import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DefaultNavbar from "./Components/DefaultNavbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Sign_up from "./Pages/Register";
import Services from "./Pages/Services";

function App() {
  const location = useLocation();

  return (
    <div>
      <DefaultNavbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Sign_up />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;