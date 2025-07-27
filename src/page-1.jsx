import React from 'react'
import { motion } from 'framer-motion';

export default function Page1({handleClosePage1}) {
 return (
		<motion.div className="flex flex-col bg-white" 
        initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    
        >
			<div className="flex flex-col items-start self-stretch bg-[#03061C] h-[765px] rounded-[40px]">
				<span className='cursor-pointer' onClick={() => handleClosePage1()}>
                    <img 
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/7uf2bnsh_expires_30_days.png"} 
					className="w-[25px] h-[25px] mt-10 mb-2 ml-[955px] rounded-[40px] object-fill"
				/>
                </span>
				<div className="flex flex-col items-start self-stretch relative mb-2 ml-[170px] mr-[70px]">
					<div className="items-start self-stretch relative">
						<div className="flex flex-col items-start self-stretch bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/vreokbpm_expires_30_days.png')] bg-cover bg-center relative pt-[76px] pb-40 rounded-[40px]">
							<div className="w-1 h-[448px] ml-[330px] rounded-[20px] border border-solid border-black" 
								style={{
									background: "linear-gradient(180deg, #29292900, #9972FD, #29292900)"
								}}>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/5zf8n1t7_expires_30_days.png"} 
								className="self-stretch h-[275px] absolute top-[172px] right-[202px] left-[202px] rounded-[40px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF0D] w-[326px] absolute relative top-[22px] left-[-82px] rounded-[28px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/c296o13p_expires_30_days.png"} 
								className="self-stretch h-[183px] rounded-[28px] object-fill"
							/>
							<span className="text-[#8498FF] text-4xl font-bold text-right w-[276px] absolute top-6 left-6" >
								{"GrowthDay, UI/UX Designer"}
							</span>
							<span className="text-[#DDDDDD] text-xl text-right w-[277px] absolute bottom-0 left-6" >
								{"October 2021 - Present | Remote"}
							</span>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF26] w-[326px] absolute relative bottom-[70px] left-[-82px] rounded-[28px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/10cwpv6b_expires_30_days.png"} 
								className="self-stretch h-[183px] rounded-[28px] object-fill"
							/>
							<span className="text-[#8498FF] text-4xl font-bold text-right w-[276px] absolute top-6 left-6" >
								{"GrowthDay, UI/UX Designer"}
							</span>
							<span className="text-[#DDDDDD] text-xl text-right w-[277px] absolute bottom-0 left-6" >
								{"October 2021 - Present | Remote"}
							</span>
						</div>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/zt7w95zu_expires_30_days.png"} 
						className="w-[400px] h-[156px] absolute top-[190px] right-[3px] rounded-[40px] object-fill"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/B1lBMMHttH/dzar1e8p_expires_30_days.png"} 
						className="w-32 h-16 absolute bottom-[298px] right-0 rounded-[40px] object-fill"
					/>
				</div>
			</div>
		</motion.div>
	)
}
