import React from 'react'

import { FaUserTie, FaClock, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Packages = ({packeges}) => {
    const {
    image,
    service_name,
    category,
    description,
    price,
    duration_with_date,
    counselor,
    rating,
  } = packeges;
  return (
   
   <div className='card bg-base-100 shadow-xl h-full flex flex-col  '>

         <div className="card bg-base-100 shadow-xl h-full hover:shadow-2xl transition duration-300">
      {/* Image */}
      <figure className="relative">
        <img src={image} alt={service_name} className="h-56 w-full object-cover" />
        <span className="absolute top-4 right-4 badge badge-primary">
          {category}
        </span>
      </figure>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-center">
          {service_name}
        </h2>

       

        {/* Time */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaClock />
          <span>{duration_with_date}</span>
        </div>

         {/* Counselor */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 font-bold">
          <FaUserTie />
          <span>{counselor}</span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar />
            <span className="font-semibold">{rating}</span>
          </div>

          <div className="text-lg font-bold text-primary">
            ৳{price}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-4">{description.slice(0, 100)}... <span className="link link-primary "><Link to={`/package/${packeges.id}`}>Read More</Link></span>
        </p>

        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full whitespace-nowrap">
            Book Session
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Packages