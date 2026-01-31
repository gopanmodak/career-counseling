import React from "react";
import MeetOur from "../Conponents/MeetOur";

const AboutUs = () => {
  return (
    <div className="bg-[#F6F1F1] p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 my-20">
      <div>
        <h2 className="text-[28px] font-bold mb-4 font-Lexend text-[#171A1F] max-w-115">
          Providing career guidance and resources to individuals seeking
          development support.
        </h2>
      </div>
      <div>
        <p className="text-[#000000] text-[16px] max-w-100">Our company has rich history of helping individuals achieve their career goals. From our humble beginnings to our current success, we have continuously evolved to met the changing needs of our clients. We take pride in our achievements look forward to assisting you on your career journey.</p>
      </div>
    </div>
    <MeetOur/>

    <div className="flex flex-col justify-center items-center">

        <h1 className="text-[#171A1F] text-[35px] font-bold mb-4 font-Lexend">
            We're hiring
        </h1>
        <p className="text-[#171A1F] text-[18px]  mb-4 ">Join the counselling journey with us</p>
        <button className="bg-[#146C94] text-[#FFFEFE] h-14 w-41 rounded hover:bg-fuchsia-600 transition-all duration-300 ease-in-out hover:text-[#FFFEFE]">Open positions</button>
    </div>
    </div>
  );
};

export default AboutUs;
