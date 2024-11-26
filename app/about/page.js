"use client";

import React, { useEffect, useState } from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { IoCompassOutline } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";
import CertificatesInfo from "./Certificates";


const Page = () => {
 
  const [missionVision, setMissionVision] = useState([]);
  const [aboutData, setAboutData] = useState([]);



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://farees-backend.vercel.app/home-about");
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);


  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://farees-backend.vercel.app/missionVision");
        setMissionVision(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);



  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://i.postimg.cc/hvL2Qk6k/Cover.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-xl md:text-4xl font-extrabold"> About Us</h1>
            <div className="text-sm text-white breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="py-10 sm:py-16 lg:py-12">
          <div className="max-w-[1300px] px-4 mx-auto sm:px-6 lg:px-8">
            <div class="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
              {
                aboutData?.map(item => (
                  <div key={item._id}
                    class="grid items-center md:grid-cols-2 md:gap-x-20">
                    <div class="pr-12 sm:pr-0">
                      <div className="relative max-w-md mb-12">
                        <img className="object-bottom rounded-md" src={item.mainImage} alt="about image" />
                        <img
                          className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-14"
                          src={item.secondaryImage}
                          alt="about image"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="hidden lg:block font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Farees Construction <br /> Limited (FCL)
                      </h2>
                      <h2 className="lg:hidden text-2xl font-bold leading-tight text-black mt-4">
                        Farees Construction Limited (FCL)
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-gray-600 text-justify">{item.description}</p>
                      <br />
                      <p className="hidden lg:block text-base leading-relaxed text-gray-600 text-justify">
                        {item.additionalInfo}
                      </p>
                      <div>
                        <Link
                          href="/about"
                          aria-label=""
                          className=" items-center  font-semibold transition-colors duration-200  bg-black hover:bg-green-500 text-white p-3 w-52 flex justify-center rounded-full mt-8"
                        >
                          Explore More
                          <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white text-black pb-16">
        <div className="lg:container px-4  lg:mx-auto lg:max-w-[1300px]">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {
              missionVision?.map(item => (
                <div key={item._id}>
                  <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                    <div className="flex justify-between">
                      <span className="inline-block text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          />
                        </svg>
                      </span>

                    </div>
                    <h1 className="text-xl font-semibold text-black capitalize ">
                      {item.title}
                    </h1>

                    <p className="text-gray-500 text-justify md:h-40  ">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* section 04  */}
      <div className="bg-gray-800 py-10 ">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] mt-10 mb-20">
          <h2 class="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-4xl mb-4">
            Organogram
          </h2>
          <img
            src="https://i.ibb.co/L85nJpy/ORGANOGRAM.png"
            className="w-full"
          ></img>
        </div>
      </div>

      {/* Certificates Section */}
      <CertificatesInfo />
    </div>
  );
};

export default Page;
