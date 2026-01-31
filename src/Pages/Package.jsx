import React from "react";
import { useLoaderData } from "react-router-dom";
import Packages from "../Conponents/Packages";

const Package = () => {
  const packeges = useLoaderData();
  console.log(packeges);
  return (
    <div>
      <h1 className="text-5xl text-[#0C0C0C] font-extrabold text-center mt-30">
        Discover Our Featured Packages
      </h1>

      <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 mt-20 max-w-7xl mx-auto">
        {packeges.map((packeges) => (
          <Packages key={packeges.id} packeges={packeges} />
        ))}
      </div>

      <div className="text-center mt-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-5 font-Lexend max-w-2xl text-center">
          Unlock Your Potential with Career Counseling Services
        </h1>
        <p className="text-md  font-Lexend max-w-lg text-center">
          Our comprehensive resources can help you navigate your career
          development journey and optimize your job search strategies.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 max-w-7xl mx-auto mb-50 mt-30">
        <div className="flex flex-col justify-center items-center text-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9467/9467019.png"
            alt="Workshops"
            className="mb-10 w-20"
          />
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 max-w-sm">
            Career Development Resources
          </h1>
          <p className="text-[#565D6D] ">
           Access a wide range of career development toos and resources.
          </p>
        </div>


        <div className="flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8644/8644515.png"
            alt="Workshops"
            className="mb-10 w-20"
          />
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 max-w-sm">
           Job Search Strategies
          </h1>
          <p className="text-[#565D6D] ">
            Learn effective job search strategies to land your dream job
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/17048/17048543.png"
            alt="Workshops"
            className="mb-10 w-20 "
          />
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 max-w-2xl">
           Expert Career Guidance
          </h1>
          <p className="text-[#565D6D] max-w-2xl">
            Get personalized career guidance from our team of experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Package;
