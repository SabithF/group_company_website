import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15, // each child starts after 0.15s
                delayChildren: 0.4,    // first child after 0.4s
            },
        },
    };

    const cardLeft = {
        hidden: { opacity: 0, x: -40, rotate: -2 },
        show: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { type: "spring", stiffness: 160, damping: 18 },
        },
    };

    const cardScale = {
        hidden: { opacity: 0, y: 16, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 170, damping: 20 },
        },
    };

    const cardRight = {
        hidden: { opacity: 0, x: 40, rotate: 2 },
        show: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { type: "spring", stiffness: 160, damping: 18 },
        },
    };

    const textBlock = {
        hidden: { opacity: 0, x: 60 },
        show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
    };

    return (
        <section
            id="about"
            className="relative z-0 isolate overflow-clip

        min-h-[120vh] bg-no-repeat bg-[length:200%_auto] bg-[center_500px]
        md:bg-[center_230px] md:bg-[length:97%_auto] bg-[url('/assets/img/aboutus-bg.jpg')]
        "
        >
            {/* bg-image */}
          

            <div className="relative flex flex-col w-full min-h-screen z-10 pt-5">
                <h1 className="pt-10 md:ml-20 md:pt-32 z-20 flex justify-center w-full 
                       text-4xl md:text-[100px] font-messiri uppercase items-center text-textBlue">
                    about us
                </h1>

                <div className="relative flex flex-col-reverse md:flex-row justify-center">
                    {/* Image container */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="md:pt-0 pt-10 relative bg-cover bg-center flex w-full h-full 
                       justify-center"
                    >
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="relative z-10 flex flex-row gap-3 md:gap-6"
                        >
                            <motion.div
                                variants={cardLeft}
                                className="w-32 h-64 md:w-40 md:h-72 rounded-2xl bg-black overflow-hidden shadow-lg"
                            >
                                <img
                                    src="/assets/img/img-1.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-top"
                                />
                            </motion.div>

                            <motion.div
                                variants={cardScale}
                                className="w-32 h-64 md:w-40 md:h-72 rounded-2xl bg-black 
                           overflow-hidden shadow-lg mt-24 md:mt-36"
                            >
                                <img
                                    src="/assets/img/img-4.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-top"
                                />
                            </motion.div>

                            <motion.div
                                variants={cardRight}
                                className="w-32 h-64 md:w-40 md:h-72 rounded-2xl bg-black 
                           overflow-hidden shadow-lg mt-48 md:mt-56"
                            >
                                <img
                                    src="/assets/img/img-6.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-top"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className="flex w-full justify-start items-start md:-translate-y-5">
                        <motion.p
                            variants={textBlock}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="md:py-16 md:px-16 mx-3 p-3 md:mx-40 
                         bg-cardBlue bg-opacity-2 font-messiri md:text-xl text-blue-800 
                         text-center rounded-2xl"
                        >
                            Our core values shape our approach to tea production, hardware
                            supply, export activities, and our hospitality offerings. Our
                            dedicated leadership team fosters sustainable growth and ensures
                            superior quality and enduring value in all our endeavors by
                            committing to these values.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
