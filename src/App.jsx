import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import Sidebar from "./components/SideBar";
import Home from "./components/Home";
import MainContent from "./components/MainContent";
import Selector from "./components/Selector";
export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Router>
      <div className="bg-[#141517]">
        {/* SIDEBAR */}
        <Sidebar showMenu={showMenu} />
        {/* BOTON MENU MOVILE */}
        <button
          onClick={toggleMenu}
          className=" lg:hidden fixed right-4 bottom-4 bg-[#664EFA] ring-2 ring-[#141517] text-white text-xl p-3 rounded-full z-50"
        >
          {showMenu ? <RiCloseLine> </RiCloseLine> : <RiMenu3Fill />}
        </button>
        {/* CONTENT */}
        <main className="lg:pl-80 p-8">
          {/* HEADER */}
          <Home />
          {/* MAIN CONTENT */}
          <MainContent />
        </main>
      </div>
    </Router>
  );
}
