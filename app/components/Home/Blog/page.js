"use client"

import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    const fetchBlogs = async () => {
      const response = await fetch('/blogs.json'); 
      const data = await response.json();
      setBlogs(data);
    };
    
    fetchBlogs();
  }, []);

  return (
    <div className="bg-state-50 mt-20 mb-20">
      <h2 className="text-2xl text-center mt-10 mb-10 font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
        Recent Activities
      </h2>
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white rounded shadow-sm"
            >
              <img
                src={blog.image}
                className="object-cover w-full h-64"
                alt="Blog post"
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">{blog.date}</span>
                </p>
                <h2 className="inline-block mb-3 text-xl lg:h-16 font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700" >
                  {blog.title}
                </h2>
                <p className="mb-2 text-gray-700 text-justify">
                  {blog.body.substring(0, 100)}...
                </p>
                <a
                  href="/"
                  aria-label="Learn more"
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


 
