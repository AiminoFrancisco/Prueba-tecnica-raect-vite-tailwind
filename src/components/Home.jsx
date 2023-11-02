import React from "react";
import {
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiNotification3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <header className="fixed left-0 top-0 p-8 flex w-full justify-end border-b border-gray-500 bg-[#141517]">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/" className="relative text-white text-lg">
              <RiNotification3Line />
              <RiCheckboxBlankCircleFill className="text-orange-600  text-[8px] absolute -top-[2px] -right-4" />
            </Link>
          </li>
          <Link to="/" className="flex text-white items-center gap-2">
            <img
              src="https://img.freepik.com/vector-gratis/hombre-lindo-obtener-idea-dibujos-animados-vector-icono-ilustracion-concepto-icono-negocio-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-4064.jpg?w=826&t=st=1698894498~exp=1698895098~hmac=95685789c044bdb20158ee4d1bf5f39263c54af6e15c345cb02f8daba426f5ef"
              className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
            />
            Francisco Aimino
            <RiArrowDownSLine />
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Home;
