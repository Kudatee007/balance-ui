import {  ArrowUp, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="h-screen relative pt-6">
      <footer>
        <section className="w-full px-8">
          <ul className="flex flex-col gap-0 leading-24">
            <li className="text-[90px] text-[#141414] font-bold">Home</li>
            <li className="text-[90px] text-[#141414] font-bold">About</li>
            <li className="text-[90px] text-[#141414] font-bold">Work</li>
            <li className="text-[90px] text-[#141414] font-bold">Contact</li>
          </ul>
          <div className="flex justify-end items-end pt-26 pr-20">
            <div>
              <div className="flex gap-3 mb-4">
                <div className="bg-gray-300 w-11 h-11 rounded-full flex justify-center items-center">
                  <Instagram className="w-4" />
                </div>
                <div className="bg-gray-300 w-11 h-11 rounded-full flex justify-center items-center">
                  <Facebook  className="w-4" />
                </div>
                <div className="bg-gray-300 w-11 h-11 rounded-full flex justify-center items-center">
                  <Twitter className="w-4" />
                </div>
                <div className="bg-gray-300 w-11 h-11 rounded-full flex justify-center items-center">
                  <Linkedin className="w-4" />
                </div>
                <div className="bg-gray-300 w-11 h-11 rounded-full flex justify-center items-center">
                  <Youtube className="w-4" />
                </div>
              </div>
              <div className="mb-2">
                <span className="text-sm text-gray-500 font-medium">
                  (Inquires)
                </span>
                <p>john@jt-studiocom</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  (Phone)
                </span>
                <p>+4914255522</p>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="px-8">
            <hr className="w-full text-gray-300" />
            <div className="flex justify-between py-7">
              <div className="flex gap-14">
                <span className="text-sm text-gray-500 font-medium">
                  Imprint
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  Privacy Policy
                </span>
              </div>
              <div className="flex items-center">
                <ArrowUp className="w-4 text-gray-500" />
                <span className="text-sm text-gray-500 font-medium">
                  Back to Top
                </span>
              </div>
            </div>
          </div>
          <div className="bg-black text-center py-4">
            <p className="text-white text-xs">
              You can <span className="underline">buy this website.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
