"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const GalleryPage = () => {

  const [loading, setLoading] = useState(true);
  const [gallerys, setGallerys] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://farees-backend.vercel.app/gallery");
        setLoading(false)
        setGallerys(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);



  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://i.postimg.cc/Jh3X8hmt/20210607-174357.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold">Gallery</h1>
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
                  <Link href="/gallery">
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
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main className="lg:container lg:mx-auto lg:max-w-[1300px] px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {gallerys?.map((img) => (
            <div key={img.id} className="relative group cursor-pointer">
              <img
                src={img.galleryImage}
                alt="fcl gallery"
                width={800}
                height={600}
                className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 rounded-lg">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8"></div>
      </main>
    </div>
  );
};

export default GalleryPage;
