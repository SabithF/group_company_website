"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Legacy = ({ data }) => {
    if (!Array.isArray(data)) {
        console.error("Legacy: expected `data` array, got:", data);
        return (
            <div className="text-red-600 p-10 text-center">
                No timeline data provided.
            </div>
        );
    }

    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;

        const ro = new ResizeObserver(() => {

            setHeight(el.scrollHeight);
        });

        ro.observe(el);

        setHeight(el.scrollHeight);

        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 768px)");
        const handler = () => setIsMobile(mql.matches);
        handler();
        mql.addEventListener?.("change", handler);
        return () => mql.removeEventListener?.("change", handler);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: isMobile ? ["start 15%", "end 90%"] : ["start 10%", "end 90%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full h-full bg-white font-sans md:px-10"
            ref={containerRef}
        >
            <div className="w-full flex flex-col items-center mx-auto 
      pt-20 -pb-3 px-4 md:px-8 lg:px-10">
                <h2 className="text-5xl md:text-[100px] md:text-4xl mb-4
        font-messiri text-textBlue  text-center max-w-4xl">
                    Our Legacy
                </h2>
                <p className="text-neutral-700 font-messiri text-center pt-3 
        text-sm md:text-base max-w-sm">
                    I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
                    a timeline of my journey.
                </p>
            </div>
            {/* Content */}
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full  bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <div className="flex flex-row items-center">
                                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl 
              font-bold font-messiri text-textDarkBlue ">
                                    {item.year}
                                </h3>
                                <img src={item.logo} className="hidden md:block text-xl 
              md:pl-20 md:text-5xl h-16 
               "/>


                            </div>

                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-messiri text-textDarkBlue ">
                                {item.year}

                            </h3>

                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-messiri text-textDarkBlue ">
                                {item.title}

                            </h3>

                            <h3 className="hidden md:block text-xl text-center pb-4 md:text-5xl 
              font-bold font-messiri text-textDarkBlue ">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Vertical line */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                     from-transparent from-[0%]
                     
                      via-neutral-200 
                     to-transparent to-[99%]  
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >

                    {/* running line */}
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t
             from-purple-500 via-blue-500 to-transparent from-[0%] 
             via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
