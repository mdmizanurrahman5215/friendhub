import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import Stats from "./pages/Stats";
import Timeline from "./pages/Timeline";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./layout/Footer";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
