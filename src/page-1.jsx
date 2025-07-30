import React from 'react'
import { motion } from 'framer-motion';
import sphere from './assets/spahre-blur.png';
import { FaCogs } from 'react-icons/fa';
import reclayer from './assets/Rec.png'
import blursphere from './assets/blursphere.png'
import blur from './assets/blur.png'
import framecard from './assets/framecard.png'
import cardbg from './assets/cardbg.png'
import cardbtn from './assets/cardbtn.png'

export default function Page1({ handleClosePage1 }) {

	return (
		<motion.div className="flex flex-col   rounded-full  "
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 40 }}
			transition={{ duration: 0.5 }}


		>
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
			<div className="relative w-full   rounded-3xl p-8 flex gap-8 shadow-2xl overflow-hidden bg-[#0B0C1C]"

				style={{
					backgroundImage: `
      url(${blursphere}),
      url(${blur})`,
					// backgroundSize: 'contain, contain',
					backgroundPosition: 'center, center',
					backgroundRepeat: 'no-repeat, no-repeat',
				}}
			>
				<span
					onClick={handleClosePage1}
					className="cursor-pointer absolute   top-4 right-4 text-white text-xl transition"
				>
					X
				</span>

				<TaskProgress />

			</div>
		</motion.div>
	)
}


const tasks = [
	{
		title: "Task One",
		description: "This is the first task description.",
	},
	{
		title: "Task Two",
		description: "This is the second task description.",
	},
	{
		title: "Task Three",
		description: "This is the third task description.",
	}
];

function TaskProgress() {
	return (
		<div className="container relative w-full py-16  text-white flex justify-center">
			<div className="relative w-full max-w-6xl px-4 ">
				{/* Vertical Center Line */}
				<div style={{
					background: " linear-gradient(136deg,rgba(41, 41, 41, 1) 0%, rgba(153, 114, 253, 1) 52%, rgba(41, 41, 41, 1) 100%)"
				}} className="absolute top-0 border border-black bottom-0 left-1/2 transform -translate-x-1/2 w-1 z-0" />

				<div className="flex flex-col gap-20 relative z-10">
					{tasks.map((task, index) => {
						const isLeft = index % 2 === 0;

						return (
							<div
								key={index}
								className="flex flex-col md:flex-row items-center w-full"
							>
								{/* Left side */}
								{isLeft && (
									<>
										<div className="w-full md:w-1/2 flex justify-end pr-6" style={{
											opacity: "90%"
										}}>
											<img src={framecard} alt="framecard" />
										</div>
										{/* Dot */}
										<div className="hidden md:flex justify-center items-center w-0 relative">
											<div className="w-5 h-5 bg-purple-500 border-4 border-gray-900 rounded-full absolute left-1/2 transform -translate-x-1/2 z-20" />
										</div>
										<div className="hidden md:block w-1/2" />
									</>
								)}

								{/* Right side */}
								{!isLeft && (
									<>
										<div className="hidden md:block w-1/2" />
										{/* Dot */}
										<div className="hidden md:flex justify-center items-center w-0 relative">
											<div className="w-5 h-5 bg-purple-500 border-4 border-gray-900 rounded-full absolute left-1/2 transform -translate-x-1/2 z-20" />
										</div>
										<div className="w-full md:w-1/2 flex justify-start pl-6 mt-8 md:mt-0">
											<motion.div
												initial={{
													x: '100%',  // start off-screen to the right
													y: '-200%', // start off-screen from the top
													opacity: 0.5
												}}
												animate={{
													x: 0,
													y: 0,
													opacity: 1
												}}
												exit={{
													opacity: 0
												}}
												transition={{ duration: 0.5 }}
												style={{
													backgroundImage: `
														linear-gradient(to bottom, #7B61FF 0%, #5516CC 100%),
														url(${reclayer})
													  `,
													backgroundBlendMode: 'overlay',
													backgroundSize: 'cover',
													backgroundRepeat: 'no-repeat',
												}} className="relative z-10 bg-gradient-to-r from-[#7B61FF] to-[#5516CC] text-white rounded-2xl p-6 w-[320px] md:w-[400px] shadow-lg flex flex-col gap-2">
												<h2 className="text-[26px] font-semibold">Your AI Prompt Companion</h2>
												<p className="text-[16px]">Explore multiple prompt directions with branching.</p>
												<p className="text-[16px] mb-[20px]">Start from 2023</p>

												{/* Settings Icon */}
												{/* <div className=""> */}
												<img className='absolute bottom-[10px] right-0 w-[126px] h-[64px]  ' src={cardbg} alt='card' />
												<motion.img
													initial={{ opacity: 0 }}
													animate={
														{ opacity: 1 }

													}
													exit={{

														opacity: 1
													}}
													transition={{ duration: 0.5, delay: 0.3 }}
													className='absolute bottom-[19px] right-[68px] w-[50px] h-[50px]  ' src={cardbtn} alt='card' />
												{/* </div> */}
											</motion.div>
										</div>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

