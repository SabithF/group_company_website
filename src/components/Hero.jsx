import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

const textBlock = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Hero = () => {
  return (
    <>
      {/* Hero banner */}
      <section className="relative w-full">
        <div className="relative h-[70vh] rounded-b-[10px] md:rounded-b-[40px] shadow-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover
              bg-center md:bg-[center_-200px] md:bg-[length:100%_auto]"
            style={{ backgroundImage: "url('/assets/img/bung-02.jpg')" }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-950/70 md:bg-blue-950/60" />

          {/* Headings */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center font-messiri">
            <div className="text-white">Welcome to Meezan group</div>
            <div className="text-meezanGold text-5xl md:text-6xl leading-tight mt-2">
              Explore our <br />
              Legacy
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 px-4 sm:px-6 md:px-0">
        {/* Stagger container for cards + text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-black flex flex-col items-center md:flex-row md:mx-44 gap-3 md:gap-16 md:-mt-32 -mt-28"
        >
          {/* Card 1 */}
          <motion.div
            variants={card}
            className="h-60 md:h-96 w-full max-w-96 md:w-80 rounded-3xl overflow-hidden shadow"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img/img-2.jpg')" }}
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            className="h-60 md:h-96 w-full max-w-96 md:w-80 rounded-3xl overflow-hidden shadow"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img/img-4.jpg')" }}
            />
          </motion.div>

          {/* Card 3 (mobile only) */}
          <motion.div
            variants={card}
            className="md:hidden h-60 w-full max-w-96 rounded-3xl overflow-hidden shadow"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img/img-6.jpg')" }}
            />
          </motion.div>

          {/* Text card */}
          <motion.div variants={card} className="h-auto md:h-96 z-20 flex flex-col md:w-[50vh]">
            {/* Desktop image inside text card */}
            <motion.div variants={card} className="hidden md:block h-60 w-[50vh] rounded-3xl overflow-hidden shadow">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/img-6.jpg')" }}
              />
            </motion.div>

            <motion.div
              variants={textBlock}
              className="font-montaga w-full md:w-[50vh] px-2 md:px-7 pt-3 md:pt-4 text-grayText leading-normal text-center md:text-left tracking-wider"
            >
              Discover a century of Ceylon tea mastery, community and
              sustainability cultivated within Meezan’s mist-shrouded highland
              estates.
            </motion.div>

            <motion.div
              variants={textBlock}
              className="mt-3 md:mt-auto flex justify-center md:justify-end px-2 md:pr-7"
            >
              <button
               onClick={()=>{
                document.getElementById("about").scrollIntoView({behavior: "smooth"});
               }}
               className="text-grayText font-montaga border border-black py-2 px-4 rounded-xl">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-8 md:h-16" />
    </>
  );
};

export default Hero;
