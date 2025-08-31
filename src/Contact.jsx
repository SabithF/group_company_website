import React from "react";

const Contact = () => {

    return (
        <section className="bg-[#F8F6E9] w-full items-center flex justify-center pt-10 pb-10">

            <div className="relative flex shadow-2xl rounded-[70px]  justify-start
            flex-col md:flex-row  w-[80%]  ">
                {/* Form */}
                <div className="flex md:items-start items-center rounded-tl-[40px] rounded-tr-[40px] 
                md:rounded-tr-[0px] md:rounded-l-[70px] font-messiri  flex-col w-full
                md:px-20 bg-white py-20">
                    <h1 className="text-3xl font-semibold">
                        <span className="text-meezanGold-headL">Get</span> in Touch</h1>
                    <p className="text-sm">Get in touch with us by filling the contact form</p>

                    <form action="#" className=" mt-4 space-y-3
                     w-full flex flex-col justify-center md:justify-start md:items-start items-center">
                        {/* Name */}
                        <div className=" flex  w-full md:justify-start justify-center ">
                            <input type="name" id="name"
                                className="border rounded-lg font-urbanist py-3 pl-3 w-[70%]"
                                placeholder="Name *" required />
                        </div>
                        {/* Email */}
                        <div className=" flex w-full md:justify-start justify-center ">
                            <input type="email" id="email"
                                className="border rounded-lg font-urbanist py-3 pl-3 w-[70%]"
                                placeholder="your@email.com" required />
                        </div>
                        {/* Phone */}
                        <div className=" flex  w-full md:justify-start justify-center ">
                            <input type="phone" id="phone"
                                className="border rounded-lg font-urbanist py-3 pl-3 w-[70%]"
                                placeholder="Phone number *" required />
                        </div>
                        {/* Message */}
                        <div className=" flex  w-full md:justify-start justify-center ">
                            <textarea type="message" id="message"
                                className="border rounded-lg font-urbanist py-3 pl-3 w-[70%]"
                                placeholder="Your Message here" required />
                        </div>
                        <div className=" flex  w-full md:justify-start justify-center ">
                            <button type="message" id="message"
                                className="border bg-textDarkBlue text-white font-montserrat
                             rounded-lg  py-3 pl-3 w-[70%]"
                                required>
                                SEND
                            </button>
                        </div>

                    </form>

                </div>

                {/* Map */}
                <div className=" absolute inset-0 flex items-center justify-center  w-full">
                    <div className="relative md:block hidden h-[80%] w-[35%]
                     rounded-2xl -right-32 bg-[url(/assets/img/map.png)] bg-cover shadow-lg"></div>
                </div>

                {/* mobile map */}
                <div className="md:hidden flex w-full rounded-b-[40px] -mt-6 pb-10 justify-center 
                 z-20 px-6 bg-white">
                    <div className="w-full h-[200px] rounded-2xl bg-[url(/assets/img/map.png)]
                    bg-cover shadow-lg"></div>
                </div>

                


                {/* end blue */}
                <div className="flex  items-start justify-center bg-white 
                md:rounded-r-[70px] rounded-br-[40px] md:w-[70%] w-full">
                    <div className="rounded-[40px]  bg-[#183A4A] flex flex-row md:rounded-[70px]  h-full 
                    w-full justify-end items-end "></div>


                </div>

            </div>
        </section>
    )
}

export default Contact;

