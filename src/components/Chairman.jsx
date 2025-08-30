import { section } from "framer-motion/client";
import { motion, scale } from "framer-motion";
import React from "react";
import Typewriter from "./helperComponents/Typewriter";

const Chairman = () => {

    const seq = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.12,
            }
        }
    }

    const imageIn = {
        hidden: { opacity: 0, x: -48, scale: 0.98 },
        show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring",  visualDuration: 1000,  stiffness: 140, damping: 20 }
        }
    }
    const titleIn = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1, y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };
    const textIn = {
        hidden: { opacity: 0, x: 48 },
        show: {
            opacity: 1, x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    
    return (
        <motion.section
            id="chairman"
            variants={seq}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.10 }}
            className="relative flex flex-col items-center bg-[#E4C081] 
            bg-opacity-10 py-12 md:py-20
            justify-start overflow-x-hidden">

            {/* headline div */}
            <motion.div
            variants={titleIn}
            className="flex flex-col max-w-6xl   pt-10 md:ml-20 md:pt-24 z-20  justify-center w-full 
                       font-messiri  items-center text-textBlue">
                <span className="block text-xl text-meezanGold-headL md:translate-y-12 "> Let's hear from the</span>
                <h1 className="text-5xl md:text-[100px] md:translate-y-10 ">

                    Chairman
                </h1></motion.div>

            {/* image and the message */}
            <motion.div 

            id="chairman"
            variants={seq}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.10 }}

            className="relative flex flex-col md:mt-0 mt-6 round md:flex-row w-full justify-center h-full   ">
                {/* Image card */}
                <div className="md:h-[347px] md:w-[506px] z-10   ">
                    <motion.img 
                    variants={imageIn}
                    src="/assets/img/chair.jpg" alt="Chairman"
                        className="rounded-[30px] md:rounded-[46px] shadow-2xl " />
                    <div className="translate-y-5  text-center">
                        <Typewriter
                            text="Ihithisham Meezan"
                            speed={70}
                            delay={0}
                            className="text-center font-dancing text-2xl pt-3 md:-ml-16"
                            showCursor={false}
                        />
                        <br />
                        <Typewriter
                            text="Chairman"
                            speed={70}
                            delay={1500}
                            className="text-center font-dancing text-2xl md:-ml-16"
                            showCursor={true}
                        />
                    </div>


                </div>

                {/* Text box */}
                <div className="relative md:top-20  -top-15 md:-left-20 flex flex-col items-start justify-center">


                    <div className=" items-center justify-center flex h-[500px]
                    rounded-b-3xl md:rounded-[46px] w-[650px] md:bg-[#E4C081] bg-none  
                    -mt-10 opacity-10  drop-shadow-lg">
                    </div>



                    <motion.p 
                    variants={textIn}
                    className="absolute leading-7 md:leading-9  text-textDarkBlue 
                    font-messiri text-xl z-20   px-10 md:px-10 justify-start md:-mt-16 mt-10 flex">
                        "Marking over five decades since our humble inception in 1974,
                        it is with great pleasure that I, as Chairperson of the Meezan Group
                        of Companies, reflect on our remarkable journey. This message of felicitation
                        and greetings come with a deep sense of pride as my brother Ziaudeen Meezan and I,
                        Ihithisham Meezan recall the many milestones we have overcome, guided by an
                        unwavering "Never Say Never" spirit. Looking back,
                        vivid childhood memories of visiting sprawling
                        tea plantations with my elder....
                    </motion.p>


                    <motion.div 
                    variants={textIn}
                    className="md:block hidden items-center justify-center  ">
                        <button
                            onClick={() => {
                                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-grayText font-montaga border
                         border-black 
                         py-2 px-4 rounded-xl  
                         flex justify-center md:translate-x-[500px] 
                         md:-translate-y-[60px]">
                            More...
                        </button>
                    </motion.div>





                </div>


            </motion.div>
            <motion.div 
            variants={textIn}
            className="md:hidden items-center justify-center w-full  flex  ">
                <button
                    onClick={() => {
                        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-grayText font-montaga border
                         border-black 
                         py-2 mt-4 px-4 rounded-xl  
                         flex justify-center md:translate-x-[500px] 
                         md:-translate-y-[60px]">
                    More...
                </button>
            </motion.div>


        </motion.section>
    )
}

export default Chairman