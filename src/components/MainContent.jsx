import React from "react";
import {
  RiUserLine,
  RiCheckLine,
  RiCloseLine,
  RiBarChartFill,
  RiSlackLine,
} from "react-icons/ri";

const francisco = "text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600";
const MainContent = () => {
  return (
    <div className="pt-28">
      <h1 className="text-4xl text-gray-300 my-10">Plans & Pricing</h1>
      {/* PLANS */}
      <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {/* CARD */}
        <div className="bg-[#1E1F24]  p-8 lg:p-12 rounded-xl mb-10">
          <div className="flex flex-col items-center mb-20">
            <RiUserLine className={`${francisco}`} />
            <h2 className="text-2xl uppercase tracking-[8px]">Personal</h2>
            <p className="text-gray-500 mb-4">lorem ipsum</p>
            <h5 className="text-2xl uppercase tracking-[4px] font-bold">
              Free
            </h5>
            <p className="text-gray-500 mb-8">For a lifetime</p>
            <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
              Current Plan
            </button>
          </div>
          {/* FUTURES */}
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-primary text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4 opacity-[.4]">
              <RiCloseLine className="text-red-500 text-2xl " /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4 opacity-[.4]">
              <RiCloseLine className="text-red-500 text-2xl " /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4 opacity-[.4]">
              <RiCloseLine className="text-red-500 text-2xl " /> Detailed post
              analytics
            </li>
          </ul>
        </div>
        {/* CARD */}
        <div className="bg-[#664EFA]  p-8 lg:p-12 rounded-xl mb-10">
          <div className="flex flex-col items-center mb-20">
            <RiBarChartFill className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600" />
            <h2 className="text-2xl uppercase tracking-[8px]">Profesional</h2>
            <p className="text-gray-800 mb-4">lorem ipsum</p>
            <h5 className="text-2xl uppercase tracking-[4px] font-bold text-white">
              $99.99
            </h5>
            <p className="text-gray-800 mb-8">For a lifetime</p>
            <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
              Current Plan
            </button>
          </div>
          {/* FUTURES */}
          <ul className="flex flex-col gap-4 text-gray-800">
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4 opacity-[.7]">
              <RiCloseLine className="text-red-500 text-2xl " /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4 opacity-[.7]">
              <RiCloseLine className="text-red-500 text-2xl " /> Detailed post
              analytics
            </li>
          </ul>
        </div>
        {/* CARD */}
        <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
          <div className="flex flex-col items-center mb-20">
            <RiSlackLine className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600" />
            <h2 className="text-2xl uppercase tracking-[8px] ">Interprice</h2>
            <p className="text-gray-500 mb-4">lorem ipsum</p>
            <h5 className="text-2xl uppercase tracking-[4px] font-bold">
              $199.99
            </h5>
            <p className="text-gray-500 mb-8">For a lifetime</p>
            <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
              Current Plan
            </button>
          </div>
          {/* FUTURES */}
          <ul className="flex flex-col gap-4 text-gray-500">
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
            <li className="flex items-center gap-4">
              <RiCheckLine className="text-green-500 text-2xl" /> Detailed post
              analytics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
