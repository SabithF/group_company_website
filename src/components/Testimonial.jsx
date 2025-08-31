"use client";

import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { testimonials } from "./helperComponents/TestimonialData"; 

// ============== Stars UI =================
const Star = ({ filled }) => (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 15.9706L5.70492 17.8855C5.00142 18.1991 4.22234 17.6331 4.30325 16.8671L4.79719 12.1905L1.64874 8.69737C1.13305 8.12523 1.43063 7.20937 2.18413 7.04961L6.78449 6.07423L9.13372 2.00044C9.5185 1.33319 10.4815 1.33319 10.8663 2.00044L13.2155 6.07423L17.8159 7.04961C18.5694 7.20937 18.8669 8.12523 18.3513 8.69737L15.2028 12.1905L15.6967 16.8671C15.7777 17.6331 14.9986 18.1991 14.2951 17.8855L10 15.9706Z"
            fill={filled ? "#3E66DF" : "#E5E7EB"}
        />
    </svg>
);

const Stars = ({ rating = 5 }) => (
    <div className="flex items-center justify-end gap-1 pt-4 w-[60%] ">
        {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} filled={n <= rating} />
        ))}
    </div>
);

// ============== Card =====================
const TestimonialCard = ({ item }) => (
    <div className="relative  h-[200px] w-[320px] rounded-xl border border-meezanGold-headL/20 bg-white shadow-lg flex flex-col overflow-visible">
        {/* avatar floats above the card */}
        <div className="absolute z-10 -top-7 left-4">
            <img
                src={item.avatarUrl || "/assets/img/profile.jpg"}
                alt="profile"
                className="object-cover rounded-full h-16 w-16 shadow-lg "
            />
        </div>

        {/* top row */}
        <div className="flex flex-row w-full ">
            <div className="w-[35%] pl-4 pt-4" /> {/* spacer where avatar was */}
            <Stars rating={item.rating ?? 5} />
        </div>

        <div className="flex flex-col pt-6 h-full px-5 font-urbanist text-center items-center justify-center">
            <p>{item.message}</p>
            <div className="pt-3 font-urbanist">
                <p className="font-urbanist -mb-1 font-black">{item.name}</p>
                <p className="text-gray-300 font-outfit text-sm">{item.position}</p>
            </div>
        </div>
    </div>
);


// ============== Main =====================
const Testimonial = () => {
    const carouselRef = useRef(null);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="bg-[#F8F6E9] w-full flex justify-end items-center h-[600px] ">
            <div className="flex items-center justify-center h-[500px] md:rounded-l-[60px] md:shadow-inner shadow-none z-10 md:w-[95%] w-[100%] md:bg-[#d2e9eebe]">
                <div className="flex flex-col z-20 items-center justify-center w-full h-full overflow-hidden">
                    {/* Heading */}
                    <div className="items-center justify-center w-full text-center h-[20%] font-messiri text-4xl md:pt-16 mt-3 md:mt-0 text-textDarkBlue">
                        Voices of trust...
                    </div>

                    {/* Slider  */}
                    <div className="h-full  w-full pt-10 overflow-visible">
                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            infinite
                            swipeable
                            draggable
                            arrows={false}
                            keyBoardControl
                            itemClass="px-7 overflow-visible"
                            containerClass="px-2 overflow-visible"
                            sliderClass="overflow-visible"
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="flex h-full w-full items-center justify-center">
                                    <TestimonialCard item={t} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Arrow buttons */}
                    <div className="w-full h-[30%] items-start justify-center md:justify-end flex md:pr-20 gap-2">
                        <button
                            className="rounded-full p-3 border border-gray-300 shadow-lg"
                            onClick={() => carouselRef.current?.previous()}
                            aria-label="Previous testimonials"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="#7d7d7d"
                                viewBox="0 0 52 52"
                                xmlns="http://www.w3.org/2000/svg"
                                transform="matrix(-1, 0, 0, 1, 0, 0)"
                            >
                                <path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z"></path>
                            </svg>
                        </button>

                        <button
                            className="rounded-full p-3 border border-gray-300 shadow-lg"
                            onClick={() => carouselRef.current?.next()}
                            aria-label="Next testimonials"
                        >
                            <svg className="w-4 h-4" fill="#7d7d7d" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            
            </div>
        </section>
    );
};

export default Testimonial;
