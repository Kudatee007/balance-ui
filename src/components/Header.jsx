import React, { useState } from "react";
import { Atom, Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [hidden, setHidden] = useState(false);

  function handlenMenu() {
    setMenu(!menu);
  }



  return (
    <div className="fixed z-50 top-0 w-full p-8">
      <header>
        <div className="flex justify-between">
          <Atom />
          <ul className="flex flex-col gap-0 leading-8.5 pl-28">
            <li className="text-[30px] text-[#141414] font-semibold">Home</li>
            <li className="text-[30px] text-[#141414] font-semibold">About</li>
            <li className="text-[30px] text-[#141414] font-semibold">Work</li>
            <li className="text-[30px] text-[#141414] font-semibold">
              Contact
            </li>
          </ul>
          <Menu onClick={handlenMenu}/>
        </div>
        <div className={menu ? "hidden" : "block"}>
          <Sidebar />
        </div>
      </header>
    </div>
  );
};

export default Header;
