import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] pt-[12px] flex items-center justify-between mx-auto">
        <div className="text-3xl font-bold">New Tech</div>
        {toggle ? (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-xl md:hidden block"
          />
        ) : (
          <FaBars
            onClick={() => setToggle(!toggle)}
            className="text-white text-xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-5">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responisve menu */}
        <ul
          className={`duration-500 md:hidden w-full h-screen text-white fixed bg-black ${toggle ? 'left-[0px]' :'left-[-100%]' } top-[80px]`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
