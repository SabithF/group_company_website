import { motion, scale, useReducedMotion } from "framer-motion";
import { text } from "framer-motion/client";
import React from "react";

const Vision = () => {

    const seq = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.12,
            }
        }
    };

    // Line growth
    const growLineTop = {
        hidden: { scaleY: 0 },
        show: {
            scaleY: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    // title 
    const titleIn = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1, y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    // textIn
    const textIn = {
        hidden: { opacity: 0, x: -12 },
        show: {
            opacity: 1, x: 0,
            transition: { duration: 0.4, ease: "easeIn" }
        }
    };

    // bottom line
    const growLineBottom = {
        hidden: { scaleY: 0 },
        show: {
            scaleY: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.section

            className="relative z-10 bg-white flex flex-col min-h-screen w-full overflow-x-hidden">

            <motion.div
                variants={seq}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.10 }}
                className="flex flex-col items-center w-full"
            >

                <motion.div
                    variants={growLineTop}
                    className="origin-top w-[2px] h-[96px] mt-3 bg-meezanGold-light"
                />

                {/* Our vision heading */}
                <div className="relative flex items-center justify-center">
                    <motion.h1
                        variants={titleIn}
                        className="font-monteCarlo text-[60px] md:text-[128px] text-visionH1"
                    >
                        Our Vision
                    </motion.h1>
                    <motion.p
                        variants={titleIn}
                        className="absolute font-semibold text-4xl pt-5 font-messiri text-meezanGold-headL "
                    >
                        Our <span className="text-textDarkBlue">Vision</span>
                    </motion.p>
                </div>

                {/* our vision */}
                <div className="flex justify-center w-full">
                    <div className="relative md:w-[50%] w-[80%]">
                        {/* The quote is absolute -> doesn't push the paragraph */}
                        <motion.span
                            variants={textIn}
                            className="absolute left-8 -top-3 md:-top-10 pointer-events-none select-none
                 font-montaga text-[#000A2C1F] leading-none
                 text-[150px] md:text-[250px]"
                            aria-hidden="true"
                        >
                            “
                        </motion.span>

                        <motion.p
                            variants={textIn}
                            className="font-dancing text-cusiveFont text-center
                  text-[20px] md:text-[40px]"
                        >
                            Cultivate excellence and deliver value across our diverse portfolio,
                            empowering progress in the communities we serve.
                        </motion.p>
                    </div>
                </div>

                {/* second line */}
                <motion.div
                    variants={growLineBottom}
                    className="origin-top mt-6 w-[2px] md:h-[96px] h-[80px] bg-meezanGold-light"
                />

                {/* Our Mission Heading */}
                <motion.div
                    variants={seq}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="relative flex justify-center items-center w-full"
                >
                    <motion.h1
                        variants={titleIn}
                        className="font-monteCarlo text-[60px] md:text-[128px] text-visionH1"
                    >
                        Our Mission
                    </motion.h1>
                    <motion.p
                        variants={titleIn}
                        className="absolute font-semibold text-4xl pt-5 font-messiri 
                    text-meezanGold-headL "
                    >
                        Our <span className="text-textDarkBlue">Mission</span>
                    </motion.p>
                </motion.div>

                {/* Our mission */}
                <div className="flex justify-center w-full">
                    <div className="relative md:w-[50%] w-[80%]">
                        {/* The quote is absolute -> doesn't push the paragraph */}
                        <motion.span
                            variants={textIn}
                            className="absolute left-8 -top-3 md:-top-10 pointer-events-none select-none
                 font-montaga text-[#000A2C1F] leading-none
                 text-[150px] md:text-[250px]"
                            aria-hidden="true"
                        >
                            “
                        </motion.span>

                        <motion.p
                            variants={textIn}
                            className="font-dancing text-cusiveFont text-center
                  text-[20px] md:text-[40px]"
                        >
                            Be a dynamic and respected Sri Lankan conglomerate, renowned
                            for our commitment to quality, innovation,
                            and sustainable development.
                        </motion.p>
                    </div>
                </div>

                {/* Third line */}
                <motion.div
                    variants={growLineBottom}
                    className="origin-top mt-6 w-[2px] md:h-[96px] h-[80px] bg-meezanGold-light"
                />

                {/* History heading */}
                <motion.div
                    variants={seq}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="relative flex-col items-start justify-center w-full min-h-screen"
                >
                    <div className="relative flex-col flex items-center justify-center">
                        <motion.h1
                            variants={titleIn}
                            className="font-monteCarlo text-[60px] md:text-[128px] text-visionH1"
                        >
                            Our History
                        </motion.h1>
                        <motion.p
                            variants={titleIn}
                            className="absolute font-semibold text-4xl pt-5 font-messiri text-meezanGold-headL "
                        >
                            Our <span className="text-textDarkBlue">History</span>
                        </motion.p>
                    </div>

                    {/* Background */}
                    <div
                        className="absolute inset-0 -z-10 pointer-events-none bg-no-repeat
                 bg-[center_100px] md:bg-[center_100px]
                 bg-[length:100%_auto] md:bg-[length:100%_auto]"
                        style={{ backgroundImage: "url('/assets/img/world.png')" }}
                    />

                    <div className=" mt-3 text-textDarkBlue items-center flex flex-col justify-center ">
                        <motion.h2
                            variants={titleIn}
                            className="text-2xl md:text-4xl font-"
                        >
                            Since 1925
                        </motion.h2>
                    </div>

                    <motion.p
                        variants={textIn}
                        className="font-monteCarlo text-cusiveFont text-center justify-center items-center
                  text-[20px] md:text-[30px] py-3 md:py-6 px-5 md:px-48"
                    >
                        The legacy of Meezan began in 1925, founded by our cherished father, Mr. S.M. Mohideen, fondly remembered as Meezan Hajiar. A visionary entrepreneur, he entered the tea trade in 1946 with the purchase of the historic Ancoombra Tea Factory, expanding over time into multiple plantations across Sri Lanka.
                        After his passing in 1964, the next generation of the family carried forward his vision. Despite the setback of the 1974 Land Reform Commission, which seized all our estates, we persevered. In 1986, we regained the Nagalla Estate, followed by the return of Ancoombra Estate in 1990.
                        Through resilience, innovation, and commitment, we restored these estates—reviving tea
                        fields, modernizing factories, and overcoming immense challenges. By the early 2000s,
                        Meezan had firmly re-established itself as a trusted name, a symbol of heritage, perseverance,
                        and excellence in tea.
                    </motion.p>

                    <div className="flex pt-5 items-center justify-center">
                        <motion.button
                            variants={textIn}
                            onClick={() => {
                                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-grayText font-montaga border border-black py-2 px-4 rounded-xl"
                        >
                            Learn More
                        </motion.button>
                    </div>

                    {/* Image card */}
                    <motion.div
                        variants={seq}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}

                        className="mt-20 border-red-600 flex justify-center h-full  pb-20">

                        <motion.div
                        variants={textIn}
                            className="relative border border-meezanGold 
                            mx-1 w-[100%] md:w-[80%] 
                            h-[200px] md:h-[400px] bg-no-repeat 
                            items-center justify-center flex md:bg-[url('/assets/img/img-1.jpg')]
                            bg-[url('/assets/img/img-1.jpg')] rounded-3xl
                            bg-[center_0px] md:bg-[center_0px] md:bg-[length:100%_auto] bg-[length:120%_auto]"
                        >
                            <div 
                            
                            className="absolute inset-0 bg-blue-950/70 md:bg-blue-950/60 rounded-2xl" />

                            <motion.div 
                            variants={textIn}
                            className="flex flex-col items-center justify-start">
                                <div
                                    
                                    variants={textIn}
                                    className="-translate-y-[40px] md:-translate-y-[100px]
                                 py-5 md:py-5  rounded-lg bg-meezanGold
                                 flex flex-row justify-between w-[200px] md:w-[250px] px-3  items-center"
                                >
                                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                                </div>

                                <motion.div 
                                variants={textIn}
                                className="relative z-10 text-white flex flex-row 
                            font-messiri text-2xl md:text-[60px] mx-5 -mt-5">
                                    <p className="translate-x-6 md:translate-x-0">Excellence</p>
                                    <p className="mt-12  md:mt-24 ">Collaboration</p>
                                    <p className="mt-24 md:mt-48 -translate-x-6 md:translate-x-0">Sustainability</p>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                    </motion.div>


                </motion.div>

            </motion.div>
        </motion.section>
    );
};

export default Vision;
