import React from "react";
import johnTaylorLogo from "../assets/JohnTaylor-Logo.svg";
import hamburger from "../assets/hamburger.svg";
import { Atom, Menu } from "lucide-react";
const Sidebar = () => {
  return (
    <div>
      <header>
        <section className="h-screen p-8 w-full">
          <div className="flex justify-between">
            <Atom />
            <Menu />
          </div>
          <div className="flex justify-around h-4/5 items-end px-[100px]">
            <ul className="flex flex-col gap-0 leading-28">
              <li className="text-[110px] text-[#141414] font-bold">Home</li>
              <li className="text-[110px] text-[#141414] font-bold">About</li>
              <li className="text-[110px] text-[#141414] font-bold">Work</li>
              <li className="text-[110px] text-[#141414] font-bold">Contact</li>
            </ul>
            <div>
              <div className="flex gap-4 mb-2">
                <Atom />
                <Atom />
                <Atom />
                <Atom />
                <Atom />
              </div>
              <div className="mb-2">
                <span className="text-sm text-gray-500 font-medium">
                  (Inquires)
                </span>
                <p>john@jt-studiocom</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">(Phone)</span>
                <p>+4914255522</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Sidebar;
