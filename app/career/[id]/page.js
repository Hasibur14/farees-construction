"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const JobDetailsPage = ({ jobId }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://farees-backend.vercel.app/jobs/${jobId}`);
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
  }, [jobId]);

  if (loading) return <div>Loading...</div>;
  if (!job) return <div>Job not found</div>;




    return (
        <div className="bg-gray-100 min-h-screen mt-24">
            {/* Job Details Section */}
            <main className="py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Job Title and Header */}
                    <h2 className="text-3xl font-bold mb-4">Position: {job.title}</h2>
                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">Location: </span>{job.location}
                    </p>
                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">Employment Type: </span>{job.employmentType}
                    </p>
                    <p className="text-gray-600 mb-6">
                        <span className="font-semibold">Start Date: </span>{job.startDate}
                    </p>

                    {/* Job Description */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Job Description</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {job.jobDescription.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {job.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Application Details */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Application Details</h3>
                        <p className="text-gray-700 mb-4">
                            To apply for this position, please submit your resume and cover letter through our online application portal or send them to
                            <a href={`mailto:${job.applicationDetails.email}`} className="text-blue-600 hover:underline"> {job.applicationDetails.email}</a>.
                        </p>
                        <p className="text-gray-700">Application Deadline: {job.applicationDetails.deadline}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JobDetailsPage;
