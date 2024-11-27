"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const ShortAbout = () => {
  const [loading, setLoading] = useState(true);
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://farees-backend.vercel.app/home-about");
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);



  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
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
    </section>
  );
};

export default ShortAbout;
