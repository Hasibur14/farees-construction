"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const RecentWorks = () => {
  const [recentWorks, setRecentWorks] = useState([]);


  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/recentWorks");
        setRecentWorks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const limitedRecentWorks = recentWorks.slice(0, 6);

  return (
    <div className="py-20 container mx-auto max-w-[1300px]" id="recent-works">
      <div className="mx-5 lg:container lg:mx-auto">
        <div>
          <h2 class="text-2xl text-center font-bold leading-tight mb-10 text-black sm:text-4xl lg:text-4xl">
            Recent Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {limitedRecentWorks?.map((project, index) => (
            <div key={index}>
              <div className="relative h-[300px] overflow-hidden rounded-md">
                <img
                  className="bg-black bg-opacity-40 w-full h-full"
                  src={project.backgroundimg}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
                  <h2 className="text-xl md:text-2xl text-white font-bold">
                    {project.name}
                  </h2>
                  <div className="flex gap-2 mt-2">
                    <p className="border border-white text-white rounded-full px-5 py-2">
                      Construction
                    </p>
                    <p className="border border-white text-white rounded-full px-5 py-2">
                      Recent Works
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
