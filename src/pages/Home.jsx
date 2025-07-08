import React from "react";
import pictureBlack from "../assets/PictureBlack.svg";
import apexBackground from "../assets/PictureBlack.svg";

const Home = () => {
  return (
    <div>
      <section className="flex items-end justify-end h-screen w-full px-8">
        <div className="w-full text-start">
          <p className="text-sm text-black">Digital Designer</p>
          <p className="text-sm text-gray-500 w-[30ch] leading-4">
            I help designers and agencies elevate thier branding with creative
            development support.
          </p>
          <h1 className="text-[200px] font-bold leading-45">JOHN TAYLOR</h1>
        </div>
      </section>
      <section className="h-screen px-8 py-10 flex items-end justify-end">
        <div className="pr-[80px]">
          <img src={pictureBlack} alt="" className="ml-[100px]" />
          <p className="text-black text-[62px] font-semibold leading-15">
            I help brands craft meaningful stories and compelling visuals that
            deeply reonate with their audience, foster strong connections, build
            lasting loyalty, and drive sustainable long-term growth.
          </p>
        </div>
      </section>
      <section className="w-full flex justify-end pb-[200px] pt-[40px] pr-[120px]">
        <div>
          <hr className="pb-5 w-full" />
          <div className="flex justify-end gap-10 w-[750px] px-8">
            <div>
              <h2 className="text-base font-bold text-black pb-2">
                From A to Z
              </h2>
              <p className="text-sm text-gray-400 leading-5 pb-6">
                I manage your entire branding process, from concept to
                execution. Whether it's logo design, messaging, or strategy, I
                ensure everything aligns for a cohesive and impactful brand.
              </p>
              <button className="w-[170px] h-[60px] bg-black text-white rounded-full">
                More about me
              </button>
            </div>
            <div>
              <h2 className="text-base font-bold text-black pb-2">
                Solo or Team
              </h2>
              <p className="text-base text-gray-400 leading-5">
                I work both independently and with a trusted team, adapting to
                your project’s needs to deliver the best results, whether it's a
                solo vision or a collaborative effort.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-screen bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${apexBackground})`,
        }}
      >
        <h2 className="text-[32px] font-bold underline">APEX ARCHITECTS</h2>
      </section>
      <section
        className="h-screen bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${apexBackground})`,
        }}
      >
        <h2 className="text-[32px] font-bold underline">DIONYSOS RESORTS</h2>
      </section>
      <section
        className="h-screen bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${apexBackground})`,
        }}
      >
        <h2 className="text-[32px] font-bold underline">ARGUS EYEWEAR</h2>
      </section>
      <section className="h-[320px] text-center py-[60px]">
        <button className="w-[170px] h-[60px] bg-black text-white rounded-full">
          All work <span className="text-gray-500">(6)</span>
        </button>
      </section>
      <section
        className="h-[680px] bg-cover bg-center text-white flex flex-col justify-between px-8 pt-8"
        style={{
          backgroundImage: `url(${apexBackground})`,
        }}
      >
        <div className="flex justify-between">
          <span className="text-base">(contact)</span>
          <p className="text-[35px] font-semibold w-[20ch] leading-9">
            Global Presense, global recognition - Contact me to take your next
            step.
          </p>
        </div>
        <h2 className="text-[105px] font-bold underline">Contact me</h2>
      </section>
    </div>
  );
};

export default Home;
