"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";



const CSR = () => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [imgsData, setImgsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/csrs");
        setImgsData(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const showMoreImages = () => {
    setVisibleImages((prev) => prev + 4); // Load 4 more images when clicked
  };

  const currentimgs = imgsData.slice(0, visibleImages);

  if (loading) {
    return <div className="text-center py-10">Loading Data...</div>;
  }

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-construction-site-with-cranes-in-the-field-img_2541656.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold">CSR</h1>
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
                  <Link href="/csr">
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
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="lg:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 lg:mx-auto lg:max-w-[1300px]">
          {currentimgs?.map((img) => (
            <div key={img.id} className="border hover:border-red-500 rounded">
              <img

                src={img.image}
                alt="project Image"
                className="w-full h-full p-5 rounded-2xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
        {visibleImages < imgsData.length && (
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-700"
              onClick={showMoreImages}
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CSR;
