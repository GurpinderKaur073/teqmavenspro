import React, { useEffect, useState } from 'react';
import './App.css';
import sphere from './assets/spahre-blur.png';
import d1logo from './assets/d1logo.png';
import aicon from './assets/aicon.png';
import bg1 from './assets/bg22.png';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import cdbg1 from "./assets/card1bg.png";
import cdbg2 from "./assets/card2bg.png";
import logo1 from "./assets/logo1.png";
import radio from "./assets/radio.png";
import radio1 from "./assets/radio1.png";
import { AnimatePresence } from 'framer-motion';
import Page1 from './page-1';
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext';
export default function App() {
  const { dark, toggleTheme } = useTheme();
  const [showPage1, setShowPage1] = useState(false);
  const [animateSphere, setAnimateSphere] = useState(false);
  const [sphereAnimationDone, setSphereAnimationDone] = useState(false);
  const handleOpenPage1 = () => {
    setAnimateSphere(true); // Start sphere animation
    setTimeout(() => {
      setShowPage1(true); // opens modal early
    }, 500); // adjust timing to your preference
  };
  const handleClosePage1 = () => {

    setAnimateSphere(false); //
    setTimeout(() => {
      setShowPage1(false);
    }, 500);
  };

  function AvatarGroup({ users = ["anita", "mike", "jane"] }) {
    return (
      <div className="text-center text-white">
        <p className="text-[62px] leading-[56px] font-semibold bg-[linear-gradient(136deg,_rgba(255,178,102,1)_0%,_rgba(233,118,111,1)_49%,_rgba(192,67,80,1)_100%)] bg-clip-text text-transparent">
          12K
        </p>
        <p className="text-[18px] leading-[24px] mt-[2px] text-[#B2A1FD]">
          after – $5/month
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center">
            {users.map((user, index) => (
              <div
                key={index}
                className={`w-[56px] h-[56px] rounded-full bg-gray-500 ${index === 0 ? '' : '-ml-3'} border-2 border-[#0E123D] flex items-center justify-center text-sm text-white`}
              >
                IMG
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {showPage1 ? <Page1 showPage={showPage1} handleClosePage1={handleClosePage1} /> :
        <div className="bg-white w-full container max-w-[1200px]">



          <div className="bg-[#03061C] min-h-screen py-12 px-4 lg:px-12">

            {/* Layout: column on mobile, 3-column grid on large */}
            <div className="flex flex-col lg:grid lg:grid-cols-[262px_1fr_262px] gap-6 justify-items-center">

              {/* CENTER COLUMN — Appears first on mobile */}
              <div className="relative order-1 lg:order-2 flex flex-col items-center gap-6 w-full max-w-[550px] mx-auto px-2">
                {/* Top Image */}
                <div className="relative w-full max-w-[550px] min-h-[390px] rounded-xl overflow-hidden" onClick={handleOpenPage1}>
                  <img
                    src={bg1}
                    alt="bg1"
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* Centered Overlay Content */}
                  <div className="absolute inset-0 flex flex-col pt-[32px] top-0  justify-start items-center px-4 text-center">
                    <img
                      src={logo1}
                      alt="logo"
                      className="max-w-[100%]  mb-4 pointer-events-none"
                    />
                    <p className="text-[55px] leading-[62px] font-semibold text-[#E6E3FF]">
                      Your AI Prompt Companion
                    </p>
                  </div>
                </div>

                <motion.img
                  src={sphere}
                  alt="sphere"
                  className="absolute sphere top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none z-30"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={
                    animateSphere
                      ? { scale: 5, opacity: 0 }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />



                <div className="flex justify-between w-full relative gap-4">
                  {/* Card 1 with decoration */}
                  <div className="relative w-[48%]">
                    <img
                      src={card1}
                      alt="card1"
                      className="w-full h-[107%] rounded-xl object-cover"
                    />
                    <div className="flex flex-col absolute  bottom-[0%]">
                      <img
                        src={cdbg2}
                        alt="cdbg1"
                        className=" max-w-[35%]  pointer-events-none"
                      />
                      <div className="mt-auto pl-[32px]">
                        <p className="text-[18px] font-bold text-[#E6E3FF]">Branching paths</p>
                        <p className="text-[16px] text-[#ACA0E4] mt-[2px]">Explore multiple prompt directions with branching.</p>
                      </div>
                    </div>

                  </div>

                  {/* Card 2 with decoration */}
                  <div className="relative w-[48%]">
                    <img
                      src={card2}
                      alt="card2"
                      className="w-full h-[107%] rounded-xl object-cover"
                    />
                    <div className="flex flex-col absolute  bottom-[0%]">
                      <img
                        src={cdbg1}
                        alt="cdbg2"
                        className=" max-w-[38%]  pointer-events-none"
                      />
                      <div className="mt-auto pl-[32px]">
                        <p className="text-[18px] font-bold text-[#E6E3FF]">Keyword enhancer</p>
                        <p className="text-[16px] text-[#ACA0E4] mt-[2px]">Boost your prompt precision with keywords.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* LEFT COLUMN */}
              <div className="order-2 lg:order-1 flex flex-col gap-6 w-full min-w-[262px]">
                <div className="bgdiv flex flex-col h-[396px] w-full max-w-[320px] mx-auto px-4 items-center sm:items-start text-center sm:text-left">
                  <div>
                    <img className="w-[54px] h-[44px] mx-auto sm:mx-0" src={d1logo} alt="d1logo" />
                    <p className="text-[28px] mt-5 font-semibold leading-[34px] bg-gradient-to-r from-white to-[#AA9CFC] bg-clip-text text-transparent">
                      Effortless <br /> Prompt <br /> Perfection
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-[18px] font-bold text-[#E6E3FF]">14 days trial</p>
                    <p className="text-[16px] text-[#ACA0E4] mt-[2px]">after – $5/month</p>
                  </div>
                </div>

                <div className="bgdiv h-[220px] w-full">
                  <AvatarGroup />
                </div>
                <div className="bgdiv h-[164px] w-full flex justify-center items-center">
                  <span className="buttoncss relative flex items-center gap-2 w-[200px] h-[70px] rounded-full overflow-hidden text-white font-semibold backdrop-blur-md">
                    <div className="absolute inset-0 z-10 rounded-full bg-white/10 shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                    <div className="relative z-20 flex items-center gap-2 px-4">
                      <img src={aicon} alt="aicon" className="w-5 h-5" />
                      <span className="text-[20px] font-normal">Generate</span>
                    </div>
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="order-3 lg:order-3 flex flex-col gap-6 w-full min-w-[262px]">
                {/* Toggle Switch */}
                <div className="bgdiv h-[157px] w-full flex items-center justify-center rounded-xl">
                  <div className='border border-[#5B4B89] rounded-full flex justify-between items-center'>
                    <img src={radio} alt="radio" />
                    <div className="w-[18px] h-[18px] border border-[#9F8EFF] mr-4 rounded-[3px]"></div>



                  </div>
                </div>


                {/* 25M Prompt Count */}
                <div className="bgdiv h-[211px] w-full flex flex-col items-center justify-center rounded-xl px-4 relative">
                  <p className="text-[36px] font-semibold text-transparent bg-gradient-to-r from-[#E6E3FF] to-[#AA9CFC] bg-clip-text">25M</p>
                  <p className="text-[#ACA0E4] text-[14px] mt-1">created prompts</p>
                  <div className="absolute left-1/4 right-1/4 bottom-[22px] border-t border-b border-[#7757F4] h-[12px]"></div>
                </div>

                {/* Prompt Templates */}
                <div className="bgdiv h-[412px] w-full rounded-xl px-4 py-6 flex flex-col justify-between">
                  <div>
                    <p className="text-white text-[16px] font-semibold">Prompt templates</p>
                    <p className="text-[#ACA0E4] text-[14px] mt-1">Use pre-made templates to jumpstart creativity.</p>
                  </div>

                  {/* Trial Tag */}
                  <div className="rotate-[-20deg] w-fit ml-2 mt-4">
                    <span className="bg-gradient-to-r from-[#C497FF] to-[#AA9CFC] px-3 py-[2px] text-xs rounded-full border border-[#E1D9FF] text-white">
                      14 days trial
                    </span>
                  </div>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-gradient-to-br from-[#5B4DFF] to-[#9F6BFF] p-3 rounded-xl text-white text-sm font-medium rotate-[-15deg] flex justify-center items-center shadow-md">
                      Rewrite
                    </div>
                    <div className="bg-[#2D295E] p-3 rounded-xl flex items-center justify-center rotate-[12deg] shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17 3a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V3zM4 0h12a3 3 0 013 3v14a3 3 0 01-3 3H4a3 3 0 01-3-3V3a3 3 0 013-3z" />
                      </svg>
                    </div>
                    <div className="bg-[#2D295E] p-3 rounded-xl text-white text-sm font-medium rotate-[-12deg] flex justify-center items-center shadow-md">
                      PNG
                    </div>
                    <div className="bg-[#2D295E] p-3 rounded-xl text-white text-sm font-medium rotate-[20deg] flex justify-center items-center shadow-md">
                      PDF
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>}
    </AnimatePresence>
  );
}

