import React, { useEffect, useState } from "react";

import { FaInstagram, FaTwitter } from "react-icons/fa";

const MeetOur = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/public/team.json")
      .then((result) => result.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-50">
        <h1 className="text-6xl font-bold mb-5 font-Lexend">Meet Our</h1>
        <p className="text-2xl font-bold font-Lexend">Get to know our team of career counselors and support staff.</p>
      </div>
      <div className="max-w-6xl mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        {team.map((team) => (
          <div key={team.id} team={team}>
            <div className="card">
              <figure className="shadow-2xl">
                <img
                  src={team.image}
                  alt="image"
                  className=" rounded-xl h-75 w-75 object-cover border-2 border-[#FFFFFF] p-1"
                />
              </figure>
              <div className="card-body flex flex-col justify-center items-center text-center">
                <h2 className="card-title font-bold font-Lexend ">
                  {team.name}
                </h2>
                <p className="text-[#146C94]">{team.designation}</p>
                <div>
                  <p className=" text-[#000000] mt-4">{team.skills}</p>
                </div>
                <div className="flex gap-4 mt-4 text-3xl">
                  <FaTwitter className="text-blue-500 hover:text-blue-700" />
                  <FaInstagram className="text-red-700 hover:text-red-900" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOur;
