import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ReadMore = () => {
  const navigate = useNavigate();

  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-neutral w-50 mt-5 mb-5 p-2"
          >
            Back to Package
          </button>
          <img
            src={data.image}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-200 ">
            <div className="space-y-2">
              <p className="inline-block text-3xl font-semibold leading-snug">
                {data.service_name}
              </p>
              <p className="text-lg">
                By
                <span className="font-semibold"> {data.counselor}</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
