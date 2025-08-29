import { motion } from "framer-motion";
import React from "react";

const Vision = () => {
    return (
        <motion.section className="flex flext-col w-full">
            <div className="flex flex-col items-center w-full  ">

                <div className=" w-[2px] h-[96px] mt-3 bg-meezanGold-light"></div>

                {/* Our vision heading */}
                <div className="relative flex items-center justify-center">

                    <h1 className="font-monteCarlo text-[60px] md:text-[128px] text-visionH1">Our Vision</h1>
                    <p className="absolute font-semibold text-4xl pt-5 font-messiri text-meezanGold-headL ">
                        Our <span className="text-textDarkBlue">Vision</span></p>

                </div>
                {/* our vision */}
                <div className="flex justify-center w-full">
                    <div className="relative md:w-[50%] w-[80%]">
                        {/* The quote is absolute -> doesn't push the paragraph */}
                        <span
                            className="absolute left-8 -top-3 md:-top-10 pointer-events-none select-none
                 font-montaga text-[#000A2C1F] leading-none
                 text-[150px] md:text-[250px]"
                            aria-hidden="true"
                        >
                            “
                        </span>

                        <p className="font-dancing text-cusiveFont text-center
                  text-[20px] md:text-[40px]">
                            Cultivate excellence and deliver value across our diverse portfolio,
                            empowering progress in the communities we serve.
                        </p>
                    </div>
                </div>
                {/* second line */}
                <div className=" mt-6 w-[2px] md:h-[96px] h-[80px] bg-meezanGold-light"></div>

                {/* Our Mission Heading */}
                <div className="relative flex justify-center items-center w-full">
                    <h1 className="font-monteCarlo text-[60px] md:text-[128px] text-visionH1" >Our Mission</h1>
                    <p className="absolute font-semibold text-4xl pt-5 font-messiri 
                    text-meezanGold-headL " >Our <span className="text-textDarkBlue" >Mission</span></p>
                </div>

                {/* Our mission */}

                <div className="flex justify-center w-full">
                    <div className="relative md:w-[50%] w-[80%]">
                        {/* The quote is absolute -> doesn't push the paragraph */}
                        <span
                            className="absolute left-8 -top-3 md:-top-10 pointer-events-none select-none
                 font-montaga text-[#000A2C1F] leading-none
                 text-[150px] md:text-[250px]"
                            aria-hidden="true"
                        >
                            “
                        </span>

                        <p className="font-dancing text-cusiveFont text-center
                  text-[20px] md:text-[40px]">
                            Be a dynamic and respected Sri Lankan conglomerate, renowned
                            for our commitment to quality, innovation,
                            and sustainable development.
                        </p>
                    </div>
                </div>
                {/* Third line */}
                <div className=" mt-6 w-[2px] md:h-[96px] h-[80px] bg-meezanGold-light"></div>

                {/* Historu heading */}
                <div className="relative flex-col  items-start  justify-center w-full h-screen ">
                    <div className="relative flex-col  flex items-center justify-center">

                        <h1 className="font-monteCarlo text-[60px] md:text-[128px] text-visionH1">Our History</h1>
                        <p className="absolute font-semibold text-4xl pt-5 font-messiri text-meezanGold-headL ">
                            Our <span className="text-textDarkBlue">History</span></p>
                    </div>

                    {/* Background */}
                    <div className="absolute w-full inset-0 bg-no-repeat bg-[url('/assets/img/world.png')]
                                    bg-[center_100px] md:bg-[center_100px]
                                    bg-[length:100%_auto] md:bg-[length:100%_auto]"/>


                    <div className=" mt-3  text-textDarkBlue items-center flex flex-col  justify-center ">
                        <h2 className="text-2xl md:text-4xl font-dancing">Since 1925</h2></div>
                    <p className="font-monteCarlo text-cusiveFont text-center justify-center items-center
                  text-[20px] md:text-[30px] py-3 md:py-6 px-5 md:px-48">
                        The legacy of Meezan began in 1925, founded by our cherished father, Mr. S.M. Mohideen, fondly remembered as Meezan Hajiar. A visionary entrepreneur, he entered the tea trade in 1946 with the purchase of the historic Ancoombra Tea Factory, expanding over time into multiple plantations across Sri Lanka.
                        After his passing in 1964, the next generation of the family carried forward his vision. Despite the setback of the 1974 Land Reform Commission, which seized all our estates, we persevered. In 1986, we regained the Nagalla Estate, followed by the return of Ancoombra Estate in 1990.
                        Through resilience, innovation, and commitment, we restored these estates—reviving tea
                        fields, modernizing factories, and overcoming immense challenges. By the early 2000s,
                        Meezan had firmly re-established itself as a trusted name, a symbol of heritage, perseverance,
                        and excellence in tea.</p>

                    <div className="flex pt-5 items-center justify-center">
                        <button
                            onClick={() => {
                                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-grayText  font-montaga border border-black py-2 px-4 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>







            </div>
        </motion.section>

    )
}

export default Vision;