import React, { useEffect, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import './App.css';
import { FaGift } from "react-icons/fa6";
import { IoMdSwitch } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { IoIosCamera } from "react-icons/io";
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
import prompt from "./assets/prompt.png";
import { AnimatePresence } from 'framer-motion';
import Page1 from './page-1';
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext';
import reclayer from './assets/Rec.png'
import blursphere from './assets/blursphere.png'
import blur from './assets/blur.png'
import CarouselSlider from './Page2';
import { set } from 'react-hook-form';
import Test from './Page3';

export default function App() {
  const { dark, toggleTheme } = useTheme();
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [animateSphere, setAnimateSphere] = useState(false);
  const [sphereAnimationDone, setSphereAnimationDone] = useState(false);
  const [sphereAnimationDone1, setSphereAnimationDone1] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleOpenPage1 = () => {
    setFlag(false);
    setSphereAnimationDone(true)
    setAnimateSphere(true); // Start sphere animation
    setTimeout(() => {
      setShowPage1(true); // opens modal early
    }, 500); // adjust timing to your preference
  };
  const handleClosePage1 = () => {

    setAnimateSphere(false); //
    setSphereAnimationDone(false)
    // setTimeout(() => {
    setShowPage1(false);
    setFlag(true);
    // }, 00);
  };
  const handleOpenPage2 = () => {
    setFlag(false);
    setAnimateSphere(true); // Start sphere animation
    setTimeout(() => {
      setShowPage2(true); // opens modal early
    }, 500); // adjust timing to your preference
  };
  const handleClosePage2 = () => {

    setAnimateSphere(false); //
    // setTimeout(() => {
    setShowPage2(false);
    setFlag(true);
    // }, 00);
  };
  const handleOpenPage3 = () => {
    setFlag(false);
    setSphereAnimationDone(true)
    setSphereAnimationDone1(true)
    setAnimateSphere(true); // Start sphere animation
    setTimeout(() => {
      setShowPage3(true); // opens modal early
    }, 500); // adjust timing to your preference
  };
  const handleClosePage3 = () => {
    setSphereAnimationDone(false)
    setSphereAnimationDone1(false)
    setAnimateSphere(false); //
    // setTimeout(() => {
    setShowPage3(false);
    setFlag(true);
    // }, 00);
  };

  function AvatarGroup({ users = ["anita", "mike", "jane"] }) {
    return (
      <div className="text-center text-white" onClick={handleOpenPage2}>
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
    <div className="bg-[#03061C] min-h-screen flex items-center justify-center">
      <AnimatePresence>
        {showPage1 ? (
          <div className=" max-w-[1200px] w-full px-4  "

          >

            <Page1 showPage={showPage1} handleClosePage1={handleClosePage1} />
          </div>
        ) : showPage2 ?
          (
            <div className=" max-w-[1200px] w-full px-4  ">
              <CarouselSlider showPage={showPage2} handleClosePage={handleClosePage2} />
            </div>
          ) : showPage3 ?
            (
              <div className=" max-w-[1200px] w-full px-4  ">
                <Test showPage={showPage3} handleClosePage={handleClosePage3} />
              </div>
            )
            : (
              <div className="max-w-[1200px] w-full mx-auto">



                <div className=" min-h-screen py-12 px-4 lg:px-12">

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
                        initial={
                          flag ? { scale: 2.5, opacity: 0.5 } :
                            { scale: 1, opacity: 1 }}
                        animate={
                          animateSphere
                            ? { scale: 2.5, opacity: 0.5 }
                            : { scale: 1, opacity: 1 }
                        }
                        exit={{ scale: 1, opacity: 1 }}
                        transition={{ ease: 'easeIn' }}
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
                      <motion.div
                        initial={
                          flag ? {
                            x: '40%',  // start off-screen to the right
                            y: '15%',
                            opacity: 0.7
                          } :
                            {
                              x: '0',  // start off-screen to the right
                              y: '0', // start off-screen from the top
                              opacity: 1
                            }}
                        animate={sphereAnimationDone1 ? {
                          x: '40%',  // start off-screen to the right
                          y: '15%',
                          opacity: 0.7
                        } : {
                          x: '0',  // start off-screen to the right
                          y: '0', // start off-screen from the top
                          opacity: 1
                        }}
                        exit={{
                          opacity: 0
                        }}
                        transition={{ duration: 0.1 }}
                        className="bgdiv flex flex-col h-[396px] w-full max-w-[320px] mx-auto px-4 items-center sm:items-start text-center sm:text-left">
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
                      </motion.div>

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
                      <motion.div
                        initial={
                          flag ? {
                            x: '-20%',  // start off-screen to the right
                            y: '20%',
                            opacity: 0.7
                          } :
                            {
                              x: '0',  // start off-screen to the right
                              y: '0', // start off-screen from the top
                              opacity: 1
                            }}
                        animate={sphereAnimationDone ? {
                          x: '-20%',  // start off-screen to the right
                          y: '20%',
                          opacity: 0.7
                        } : {
                          x: '0',  // start off-screen to the right
                          y: '0', // start off-screen from the top
                          opacity: 1
                        }}
                        exit={{
                          opacity: 0
                        }}
                        transition={{ duration: 0.1 }}
                        className="bgdiv h-[157px] w-full flex items-center justify-center rounded-xl">
                        <div className='border border-[#5B4B89] rounded-full flex justify-between items-center'>
                          <img src={radio} alt="radio" />
                          <div className="w-[18px] h-[18px] border border-[#9F8EFF] mr-4 rounded-[3px]"></div>



                        </div>
                      </motion.div>


                      {/* 25M Prompt Count */}
                      <motion.div
                        initial={
                          flag ? {
                            x: '-20%',  // start off-screen to the right
                            y: '20%',
                            opacity: 0.7
                          } :
                            {
                              x: '0',  // start off-screen to the right
                              y: '0', // start off-screen from the top
                              opacity: 1
                            }}
                        animate={sphereAnimationDone1 ? {
                          x: '-20%',  // start off-screen to the right
                          y: '20%',
                          opacity: 0.7
                        } : {
                          x: '0',  // start off-screen to the right
                          y: '0', // start off-screen from the top
                          opacity: 1
                        }}
                        exit={{
                          opacity: 0
                        }}
                        transition={{ duration: 0.1 }}
                        className="bgdiv h-[211px] w-full flex flex-col items-center justify-center rounded-xl px-4 relative">
                        <p className="text-[62px] font-semibold text-transparent bg-gradient-to-r from-[#F5F1FF] to-[#6633EE] bg-clip-text">25M</p>
                        {/* <p className="text-[#ACA0E4] text-[14px] mt-1">created prompts</p> */}
                        <div className="relative inline-block">
                          <img src={prompt} alt="prompt" />
                          <div className="absolute inset-0 flex text-[18px] items-center justify-center text-[#ACA0E4] text-[14px]">
                            created prompts
                          </div>
                        </div>

                        {/* <div className="absolute left-1/4 right-1/4 bottom-[22px] border-t border-b border-[#7757F4] h-[12px]"></div> */}
                      </motion.div>

                      {/* Prompt Templates */}
                      <div className="bgdiv h-[412px] w-full rounded-xl px-4 py-6 " onClick={handleOpenPage3}>
                        <div>
                          <p className="text-white text-[18px] font-bold">Prompt templates</p>
                          <p className="text-[#ACA0E4] text-[16px] mt-1">Use pre-made templates to jumpstart creativity.</p>
                        </div>

                        {/* Trial Tag */}
                        <div className="rotate-[-20deg] w-fit ml-20 mt-4">
                          <span
                            className="inline-flex items-center justify-center text-xs text-white px-4 py-2 rounded-full"
                            style={{
                              background: `
      linear-gradient(#2D2E58 5%) padding-box,
      linear-gradient(to right, #FFB266 0%, #F2906B 36%, #D96263 100%) border-box
    `,
                              border: '2px solid transparent',
                              borderRadius: '50em',
                            }}
                          >
                            14 days trial
                          </span>

                        </div>
                        <div className="rotate-[-54deg] w-fit ml-2 mt-4">
                          <span
                            className="bglayer inline-flex bg-[#2D2E58] border border-[#fff]/15 items-center justify-center text-xs text-white px-4 py-2 rounded-full"

                          >
                            <GoDotFill className="mr-[6px] text-[10px] text-[#C883FB] inline-block align-middle" />
                            Rewrite
                          </span>

                        </div>
                        {/* Buttons Grid */}
                        <div className="rotate-[30deg] w-fit ml-2 mt-4">
                          <span
                            className="inline-flex border border-[#fff]/33 rounded-full items-center justify-center text-xs text-white p-2"
                            style={{
                              backgroundImage: `
        linear-gradient(to bottom, #FFDAA3 0%, #E27F5A 47%, #691616 100%),
        url(${reclayer})
      `,
                              backgroundBlendMode: 'overlay',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                            }}
                          >
                            <FaGift className="text-[#ffffff]/90" />
                          </span>
                        </div>
                        <div className="rotate-[38deg] w-fit ml-2 mt-4">
                          <span
                            className="inline-flex items-center justify-center px-3 py-2 rounded-full border border-white/15"
                            style={{
                              backgroundColor: '#2D2E58',
                              backdropFilter: 'blur(4px)',
                            }}
                          >
                            {/* Left Switch Icon (Purple Gradient) */}
                            <IoMdSwitch
                              className="mr-2 text-[12px] text-[#6633EE] text-[10px]"
                              style={{
                                fontSize: '22px'
                              }}

                            />

                            {/* Right Power Icon inside a gradient circle */}
                            <span
                              className="flex items-center justify-center w-5 h-5 rounded-full"
                              style={{
                                background: 'linear-gradient(to right, #FFB266 0%, #F2906B 36%, #D96263 100%)',
                              }}
                            >
                              <ImPower className="text-white text-[10px]" />
                            </span>
                          </span>


                        </div>
                        <div className="rotate-[-90deg] w-fit px-6 py-2 rounded-full border border-white/15 bg-[#2D2E58] flex items-center space-x-6" style={{ backdropFilter: 'blur(6px)' }}>
                          {/* JPG */}
                          <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#C883FB]"></span>
                            <span className="text-sm text-[#D7C6F4] font-medium">JPG</span>
                          </div>

                          {/* PNG */}
                          <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFA94D]"></span>
                            <span className="text-sm text-[#D7C6F4] font-medium">PNG</span>
                          </div>

                          {/* PDF */}
                          <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2AB7FF]"></span>
                            <span className="text-sm text-[#D7C6F4] font-medium">PDF</span>
                          </div>
                        </div>






                        {/* Buttons Grid */}
                        <div className="rotate-[50deg] w-fit ml-2 mt-4">
                          <span
                            className="bglayer inline-flex border border-[#fff]/33 rounded-full items-center justify-center text-xs text-white p-2 rounded-full"
                            style={{
                              backgroundImage: `
        linear-gradient(to bottom, #BBA5F4 0%, #5F33D6 100%),
        url(${reclayer})
      `,
                              backgroundBlendMode: 'overlay',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                            }}
                          >
                            <IoIosCamera className='text-[#ffffff]/90' />
                          </span>

                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              </div>)}
      </AnimatePresence>
    </div>
  );
}

