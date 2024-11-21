"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const ConstructionBuild = () => {
  const [weBuilds, setWeBuilds] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/weBuild");
        setWeBuilds(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);


  return (
    <div className="bg-slate-50">
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <section className="py-8 sm:py-16 lg:py-24">
          <div className="flex justify-center">
            <h2 className="text-2xl text-center lg:text-left font-bold leading-tight mb-10 text-black sm:text-4xl lg:text-4xl">
              What We Build
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-12">
              {weBuilds?.map((item) => (
                <div
                  key={item._id}
                  className="bg-white p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 min-h-[350px] flex flex-col items-center relative group"
                >
                  {/* Top-left border */}
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 border-l-4 border-t-4 border-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Bottom-right border */}
                  <div className="absolute bottom-0 right-0 w-2/3 h-2/3  border-r-4 border-b-4 border-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="flex flex-col items-center justify-start flex-grow">
                    <img src={item.image} className="w-24 h-24 mb-4" alt={item.title} />
                    <h3 className="text-lg h-14 font-semibold text-black mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-600 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>
      </div>
    </div>
  );
};

export default ConstructionBuild;
