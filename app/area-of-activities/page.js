"use client";
import img1 from "@/public/assets/banner/constraction.jpeg";
import axios from "axios";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Activities = () => {

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://farees-backend.vercel.app/areaActivites");
        setActivities(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  if (loading) {
    return <div className="text-center py-10">Loading Data...</div>;
  }

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://t3.ftcdn.net/jpg/04/10/63/10/360_F_410631090_ahJmJdMc32H3f3VRQ8i6JsKQ9tBsRjNs.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold">
              Area of Activities
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
                  <Link href="/area-of-activities">
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
                    Areas of Activities
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-20">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">Introduction</h1>
          <p className="text-justify">
            Bangladesh being a predominantly rural economy, the priority need
            calls for balanced development, covering the whole gamut of
            socio-economic life. The scope for economic development, especially
            in the rural and allied fields, is almost unlimited. But, the
            development programs require comprehensive planning including study
            of social, economic, institutional, environmental and physical
            factors.
          </p>
          <p className="text-justify">
            The talents and expertise of in-house professional staff of Farees
            Construction Limited offers a complete package of services for
            survey/study/design, Construction works, management and supervision
            and, also for development projects of the country. From the start,
            Farees Construction Limited aimed at providing Construction services
            in different fields. Areas of activities are briefly mentioned
            underneath.
          </p>
        </div>

        <div className="mt-10">
          <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] grid grid-cols-1 md:grid-cols-3 gap-10">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl border hover:border-2 hover:border-green-500"
              >
                <div className="p-6">
                  <div className="relative">
                    <img
                      className="object-cover w-96 h-64 rounded"
                      src={activity.imgURL}
                      alt={activity.title}
                    />
                    {/* Image border with opacity */}
                    <div className="absolute inset-0 border border-gray-100 opacity-90 rounded"></div>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black">
                    {activity.title}
                  </h3>
                  <button
                    className="btn mt-4 w-full rounded-full bg-gray-800 text-white hover:bg-green-800 hover:text-white"
                    onClick={() => openModal(activity)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {selectedActivity && (
        <dialog open className="modal ">
          <div className="modal-box bg-green-400">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <img
              className="relative object-cover w-full h-64 mb-4 mt-4"
              src={selectedActivity.imgURL}
              alt={selectedActivity.title}
            />
            <h3 className="font-bold text-lg">{selectedActivity.title}</h3>
            <p className="py-4">{selectedActivity.description}</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Activities;
