"use client";
import React, { useState } from "react";

import img2 from "@/public/assets/banner/constraction.jpeg";
import Link from "next/link";

const equipmentimgs = [
  {
    src: "https://i.postimg.cc/C5mGPJxj/Bulldozer.jpg",
    alt: "Bulldozer",
  },
  {
    src: "https://i.postimg.cc/NjwsCtZk/Dump-Truck-10-wheel.jpg",
    alt: "Dump Truck 10 wheel",
  },
  {
    src: "https://i.postimg.cc/yN8knBSr/Generator.jpg",
    alt: "Generator",
  },
  {
    src: "https://i.postimg.cc/vB68Sm8X/Motor-grader.jpg",
    alt: "Motor grader",
  },
  {
    src: "https://i.postimg.cc/rp7MWLG4/Road-Roller.jpg",
    alt: "Road Roller",
  },
  {
    src: "https://i.postimg.cc/c1BG13zw/Excavator-0-7cum.webp",
    alt: "Excavator- 0.7cum",
  },
  {
    src: "https://i.postimg.cc/x8tZvvrZ/Vibro-roller.jpg",
    alt: "Vibro-roller",
  },
];

const PhotoEquipment = () => {
  const [visibleImages, setVisibleImages] = useState(3);

  const showMoreImages = () => {
    setVisibleImages((prevVisible) => prevVisible + 3);
  };

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src={img2}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold">
              Equipment Photos
            </h1>
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
                  <Link href="/list-equipments">
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
                    Equipments
                  </Link>
                </li>
                <li>
                  <Link href="/photo-equipments">
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
                    Equipment Photos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-5 lg:container lg:mx-auto pb-20">
        <section className="py-6">
          <div className="container mx-auto mt-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {equipmentimgs.slice(0, visibleImages).map((img, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg "
                >
                  <img
                    className="object-cover w-full h-80 transition-transform duration-300 transform group-hover:scale-110"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <p className="text-xl font-extrabold text-white">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {visibleImages < equipmentimgs.length && (
              <div className="mt-6 flex justify-center">
                <button
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                  onClick={showMoreImages}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoEquipment;
