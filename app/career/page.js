"use client"
import Link from "next/link";
import img1 from "@/public/assets/banner/constraction.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";



export default function CareerPage() {

  const [jobOpenings, setJobOpenings] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://farees-backend.vercel.app/jobs");
        setJobOpenings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);


  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src={img1}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold">
              Build your career
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
                  <Link href="/career">Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Current Job Openings ({jobOpenings.length})
            </h2>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {jobOpenings?.map((job, i) => (
              <div key={job._id} className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="flex justify-between">
                  <h2 className="text-[22px] md:text-3xl font-semibold mb-2">{job.title}
                  </h2>

                </div>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold"> Location -</span> {job.location}
                </p>
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full mr-2">
                    {job.
                      employmentType}
                  </span>
                  <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    {job.startDate
                    }
                  </span>
                </div>
                <p className="text-gray-700 mb-6">
                  {job.description}
                </p>

                <Link href={`/career/${job._id}`}>
                  <button className="btn bg-green-800 text-white hover:bg-green-600">
                    View Job Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
