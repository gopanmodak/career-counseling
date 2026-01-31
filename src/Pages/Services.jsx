import React from "react";
import { useLoaderData } from "react-router-dom";

import image from "../assets/banner.png";
import servicesImage from "../assets/servicesImage.png";
import servicesImage2 from "../assets/servicesImage2.png";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <div className="relative ">
        <img src={image} alt="img" className="w-full" />
        <div className="absolute flex flex-col justify-center items-center text-center gap-2 md:gap-5 top-10 md:top-30 md:left-120">
          <h1 className="font-bold text-xl md:text-5xl font-Lexenda ">
            Unlock Your Potential
          </h1>
          <p className="font-Manrope">
            Explore our comprehensive career counseling resources and guidance.
          </p>
          <span>
            <button className="btn bg-[#146C94] text-[#FFFEFE]">
              Explore More
            </button>
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10 my-25">
        <h1 className="text-3xl md:text-5xl text-[#0C0C0C] font-extrabold  max-w-200">
          Comprehensive Career Assessment Service for Individuals
        </h1>

        <p className="text-[#0C0C0C] text-lg max-w-175">
          Our Career Assessment service provides individuals with a detailed
          analysis of their sill, interests, and goals, helping them make
          informed decisions about their career path
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto text-center my-50">
        <div className="col-span-4">
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
            Why Choose Our Career Assessment Service
          </h1>
          <p className="text[#2B2B2B]">
            Accurate and personalized assessment tailored to your unique
            strengths and aspirations.
          </p>
        </div>
        <div className="col-span-4 ">
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
            Expert Guidance and Actionable Insights
          </h1>
          <p className="text[#2C2C2D]">
            Our experienced career counselors provide valuable guidance and
            actionable insights to help you make the most of your assessment
            results..
          </p>
        </div>
        <div className="col-span-4">
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
            Unlock Your Full Potential
          </h1>
          <p className="text[#2C2C2B]">
            Discover new career paths and opportunities that align With your
            skil interests and asirations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10 max-w-7xl mx-auto my-50">
        <div className="col-span-6 flex flex-col justify-center items-center gap-15">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
              Unlock Your Career Potential
            </h1>
            <p className="text[#474747]">
              Our professional resume writing service wil help you stand out
              from the competition and land your dream job. Our exert writers
              will craft a customized resume that highlights your skills and
              achievements tailored to the specious you're applying for.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
              Get Noticed by Employers
            </h1>
            <p className="text[#474747]">
              With our resume writing service, you'll have a professional
              document that showcases your qualifications and catches the
              attention of hiring mangers. Well optimize you resumé with
              industry-specific keywords and formatting to ensure it passes
              through applicant tracking systems.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
              Customized for Your Needs
            </h1>
            <p className="text[#474747]">
              Our resume writing prcess begins with a comprehensive consultation
              to understand your career goals experience, and achievements.
              We'll hen create a personalized resume that effectively
              communicates your unique value proposition and positions you as
              the ideal candidate.
            </p>
          </div>
        </div>

        <div className="col-span-6">
          <img src={servicesImage} alt="" />
        </div>
      </div>

      <div className="flex gap-5 max-w-7xl mx-auto mb-50">
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1535/1535032.png"
            alt="Workshops"
            className="mb-10 w-20"
          />
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 max-w-2xl">
            Expert-Led Workshops
          </h1>
          <p className="text-[#565D6D] max-w-2xl whitespace-nowrap">
            Learn from industry experts with years of experience.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/18890/18890469.png"
            alt="Workshops"
            className="mb-10 w-20"
          />
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5">
            Interactive Learning Environment
          </h1>
          <p className="text-[#565D6D]">
            Engage in hands-on activities and group discussions.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1207/1207441.png"
            alt="Workshops"
            className="mb-10 w-20 "
          />
          <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 max-w-2xl">
            Practical Skills for Real World Success
          </h1>
          <p className="text-[#565D6D] max-w-2xl">
            Acquire practical skills that can be immediately applied.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto my-50">
        <div className="col-span-6">
          <img src={servicesImage2} alt="" />
        </div>

        <div className="col-span-6 flex flex-col justify-center items-center gap-10">
          <div className="">
            <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 font-Lexend">
              Expert Career Coaching Sessions
            </h1>
            <p className="text-[#8B8F9C]  max-w-xl">
              Our career coaching sessions provide personalized guidance and
              support to help you navigate your career path. Our experienced
              coaches will ork with you to identify your goals, develop
              strategies. and overcome challenges
            </p>
          </div>

          <div className="">
            <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 font-Lexend">
              Resume Writing Services
            </h1>
            <p className="text-[#8B8F9C]  max-w-xl">
              Our professional resume writing services will help you create a
              compiling resume that highlights your sill, experience, and
              achievements. Stand ou from the competition and increase your
              chances of landing your dream job
            </p>
          </div>

          <div className="">
            <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 font-Lexend">
              Interview Preparation
            </h1>
            <p className="text-[#8B8F9C]  max-w-xl">
              Prepare for your job interviews with our comprehensive interview
              preparation Services. Our experts ill provide you ith valuable
              insights. practice sessions. and tips to boost your confidence and
              improve your performance
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-extrabold text-[#171A1F] mb-5 font-Lexend">
          Still have questions?
        </h1>
        <p className="text-md text-[#393939]">
          Feel free to reach out to us for any further inquiries.
        </p>
        <button className="btn btn-outline mt-5">Contact</button>
      </div>
    </div>
  );
};

export default Services;
