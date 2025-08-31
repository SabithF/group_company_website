import React from "react";

const Integrity = () => {
    return (
        <section className="relative flex flex-col  min-h-screen 
        bg-no-repeat bg-cover bg-[#F8F6E9] ">
                        
             <div className="absolute inset-0 
             bg-[url(/assets/img/bg-2-mountain.jpg)] 
              bg-[center_500px]  bg-[length:200%_auto] 
            md:bg-[center_-100px]  md:bg-[length:90%_auto] 
            bg-no-repeat" />
            
            

            <div className=" flex flex-col md:flex-row  items-center justify-between px-48 w-full h-screen">
                {/* First card */}
                <div className="relative w-56 h-56 rounded-xl overflow-hidden">
                    {/* Background image */}
                    <div className="absolute inset-0 bg-[url(/assets/img/gradiant.jpg)]
                     opacity-30 bg-cover" />

                    {/* Content */}
                    <div className="relative z-10 h-full w-full flex items-center 
                    justify-center text-white flex-col">
                        <div className="h-12 w-12 mb-3">
                            <img src="/assets/img/Handshake.png" alt="Handshake"
                                className="drop-shadow-lg " />
                        </div>
                        <h2 className="text-3xl  font-messiri font-bold drop-shadow-lg">Integrity</h2>
                    </div>
                </div>

                {/* Second card */}
                <div className="relative w-56 h-56 rounded-xl overflow-hidden">
                    {/* Background image */}
                    <div className="absolute inset-0 bg-[url(/assets/img/gradiant.jpg)]
                     opacity-30 bg-cover" />

                    {/* Content */}
                    <div className="relative z-10 h-full w-full flex items-center 
                    justify-center text-white flex-col">
                        <div className="h-12 w-12 mb-3">
                            <img src="/assets/img/Idea.png" alt="Handshake"
                                className="drop-shadow-lg" />
                        </div>
                        <h2 className="text-3xl font-messiri font-bold drop-shadow-lg">
                            Innovation</h2>
                    </div>
                </div>
                {/* Third card */}
                <div className="relative w-56 h-56 rounded-xl overflow-hidden">
                    {/* Background image */}
                    <div className="absolute inset-0 bg-[url(/assets/img/gradiant.jpg)]
                     opacity-30 bg-cover" />

                    {/* Content */}
                    <div className="relative z-10 h-full w-full flex items-center 
                    justify-center text-white flex-col">
                        <div className="h-12 w-12 mb-3">
                            <img src="/assets/img/Strength.png" alt="Handshake"
                                className="drop-shadow-lg" />
                        </div>
                        <h2 className="text-3xl font-messiri font-bold drop-shadow-lg">
                            Resilience</h2>
                    </div>
                </div>


                


            </div>

             <div className="mt-24 items-center flex justify-center">
                
                <div className="h-[200px] w-[400px] bg-[#F8F6E9]">
                   
                </div>
            </div>
           


        </section>       
    )
}

export default Integrity