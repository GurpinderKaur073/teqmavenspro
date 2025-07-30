import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cardframe from "./assets/cardframe.png"; // replace with actual image
import blursphere from './assets/blursphere.png'
import blur from './assets/blur.png'
import avatar from './assets/avatar.png'
import sphere from './assets/spahre-blur.png';
const cards = [
	{ id: 1, name: "Anna Bell", use: "15k Use" },
	{ id: 2, name: "John Smith", use: "10k Use" },
	{ id: 3, name: "Monye Matt", use: "20k Use" },
	{ id: 4, name: "Lara Dee", use: "18k Use" },
];

export default function CarouselSlider({showPage,handleClosePage}) {
	const [index, setIndex] = useState(2);

	const handlePrev = () => {
		setIndex((prev) => (prev - 1 + cards.length) % cards.length);
	};

	const handleNext = () => {
		setIndex((prev) => (prev + 1) % cards.length);
	};

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
			className=" min-h-screen bg-[#0B0C1C] flex items-center justify-center relative overflow-hidden">
			<span
				onClick={handleClosePage}
				className="cursor-pointer absolute   top-4 right-4 text-white text-xl transition"
			>
				X
			</span>
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
				onClick={handlePrev}
				className="cursor-pointer absolute left-10 text-[#502892] text-sm z-10"
			>

				<FaChevronLeft />
			</span>

			<div className="relative w-[300px] h-[420px] flex items-center justify-center">
				{cards.map((card, i) => {
					const distance = (i - index + cards.length) % cards.length;
					const isCenter = i === index;

					let rotation = 0;
					let zIndex = 10;
					let opacity = 1;
					let scale = 1;
					let translateX = 0;

					if (!isCenter) {
						rotation = distance === 1 || distance === -3 ? 8 : -8;
						translateX = distance === 1 || distance === -3 ? 60 : -60;
						scale = 0.9;
						opacity = 0.4;
						zIndex = 5;
					}

					return (
						<motion.div
							key={card.id}
							className="absolute w-[280px] h-[400px] rounded-[30px] flex flex-col items-center justify-between text-white p-5 shadow-xl"
							animate={{
								rotate: rotation,
								x: translateX,
								scale,
								opacity,
								zIndex,
							}}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
							style={{ zIndex, backgroundImage: `url(${cardframe})` }}
						>
							<p className="text-[52px] leading-[56px] font-semibold bg-[linear-gradient(136deg,_rgba(255,178,102,1)_0%,_rgba(233,118,111,1)_49%,_rgba(192,67,80,1)_100%)] bg-clip-text text-transparent">
								{card.use}
							</p>

							{/* Image + Name Overlap */}
							<div className="max-w-[250px] max-h-[350px]">
								<img
									src={avatar}
									alt="avatar"
									className=" w-full h-auto object-contain"
								/>
								
							</div>
						</motion.div>

					);
				})}
			</div>

			<span
				onClick={handleNext}
				className="cursor-pointer absolute right-10 text-[#502892] text-sm z-10"
			>
				<FaChevronRight />
			</span>
		</div>
	);
}
