import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import blursphere from './assets/blursphere.png'
import blur from './assets/blur.png'
import sphere from './assets/spahre-blur.png';
import cardbg from './assets/cardbg.png'
import cardbtn from './assets/cardbtn.png'

const cards = [
  {
    id: 1,
    title: "Your AI Prompt",
    subtitle: "Prompts templates",
    description: "Use pre-made templates to jumpstart creativity.",
    icon: "🎁",
  },
  {
    id: 2,
    title: "Chatbot Assistant",
    subtitle: "Personal Help",
    description: "Automate customer support with smart templates.",
    icon: "💬",
  },
  {
    id: 3,
    title: "Content Generator",
    subtitle: "Text Creator",
    description: "Generate marketing content in seconds.",
    icon: "📝",
  },
];

export default function AICardCarousel({ showPage, handleClosePage }) {
  const [index, setIndex] = useState(0);

  const prevCard = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  useEffect(() => {
    const timer = setTimeout(() => {
      nextCard();
    }, 500); // shuffle left once after 0.5s on mount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `
          url(${blursphere}),
          url(${blur})`,
        // backgroundSize: 'contain, contain',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
      className="min-h-screen bg-[#0B0C1C] flex items-center justify-center relative overflow-hidden px-4">
      <motion.img
        src={sphere}
        alt="sphere"
        className="absolute sphere top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none z-30"
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={
          { scale: 1.8, opacity: 0 }

        }
        exit={{
          scale: 1,
          opacity: 0
        }}
        transition={{ duration: 0.5 }}
      />
      <span
        onClick={handleClosePage}
        className="cursor-pointer absolute   top-4 right-4 text-white text-xl transition"
      >
        X
      </span>
      <span
        onClick={prevCard}
        className="absolute left-6 text-[#502892] text-3xl z-20"
      >
        <FaChevronLeft />
      </span>

      <div className="relative w-full max-w-[1000px] h-[400px] flex items-center justify-center">
        {cards.map((card, i) => {
          const offset = ((i - index + cards.length) % cards.length);
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;
          let translateX = 0;

          if (offset === 0) {
            scale = 1.1;
            opacity = 1;
            translateX = 0;
            zIndex = 30;
          } else if (offset === 1 || offset === -2) {
            scale = 0.9;
            opacity = 0.4;
            translateX = 360;
            zIndex = 20;
          } else if (offset === 2 || offset === -1) {
            scale = 0.9;
            opacity = 0.4;
            translateX = -360;
            zIndex = 20;
          } else {
            opacity = 0;
            scale = 0.8;
            translateX = 0;
            zIndex = 0;
          }

          return (
            <motion.div
              key={card.id}
              animate={{ scale, opacity, x: translateX, zIndex }}
              transition={{ duration: 0.5 }}
              className="absolute px-[38px] py-[50px] max-w-[440px] h-auto max-h-[280px] bg-gradient-to-br from-[#7A4EF3] to-[#AF48FF] rounded-3xl shadow-2xl text-white p-6 flex flex-col justify-center"
              style={{ zIndex }}
            >

              <h2 className="text-[40px] mt-[40px] leading-[50px] font-semibold">Your AI Prompt Companion</h2>
              <p className="text-[16px] mt-[16px]">Use pre-made templates to jumpstart creativity.</p>


              {/* Settings Icon */}
              {/* <div className=""> */}
              <img className='absolute rotate rotate-[180deg] top-[10px] left-0 w-[126px] h-[64px]  ' src={cardbg} alt='card' />
              <motion.img
                initial={{ opacity: 0 }}
                animate={
                  { opacity: 1 }

                }
                exit={{

                  opacity: 1
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='absolute top-[19px] left-[68px] w-[50px] h-[50px]  ' src={cardbtn} alt='card' />
              {/* </div> */}

            </motion.div>
          );
        })}
      </div>

      <span
        onClick={nextCard}
        className="absolute right-6 text-[#502892] text-3xl z-20"
      >
        <FaChevronRight />
      </span>
    </div>
  );
}
