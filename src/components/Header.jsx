import React from "react";
import { Atom, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="p-8">
      <header>
        <div className="flex justify-between">
          <Atom />
            <ul className="flex flex-col gap-0 leading-9">
              <li className="text-[32px] text-[#141414] font-semibold">Home</li>
              <li className="text-[32px] text-[#141414] font-semibold">About</li>
              <li className="text-[32px] text-[#141414] font-semibold">Work</li>
              <li className="text-[32px] text-[#141414] font-semibold">Contact</li>
            </ul>
          <Menu />
        </div>
      </header>
    </div>
  );
};

export default Header;
