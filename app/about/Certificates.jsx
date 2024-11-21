"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const CertificatesInfo = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewCertificateId, setViewCertificateId] = useState(null);
    const [selectedCertificate, setSelectedCertificate] = useState(null); 

    // Fetch data on mount
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/certificates");
                setCertificates(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);

            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    // Update selected certificate when viewCertificateId changes
    useEffect(() => {
        if (viewCertificateId) {
            const selectedCert = certificates.find(cert => cert._id === viewCertificateId);
            setSelectedCertificate(selectedCert); 
        }
    }, [viewCertificateId, certificates]); 




    const handleViewCertificate = (id) => {
        console.log("View Certificate ID:", id); 
        setViewCertificateId(id);
    };
    const handleCloseCertificateView = () => setViewCertificateId(null);


    if (loading) {
        return <div className="text-center py-10">Loading certificates...</div>;
    }

    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-8">
                    Certificates
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {certificates.map((cert) => (
                        <div
                            key={cert._id} // Use _id for uniqueness
                            className="bg-white md:h-52 py-10 px-4 rounded-lg shadow-md border-b-2 hover:border transition-all duration-300 border-green-700 flex flex-col items-center"
                        >
                            <h3 className="text-lg text-center font-semibold">
                                {cert.title}
                            </h3>
                            <div className="relative flex justify-center">
                                <button
                                    onClick={() => handleViewCertificate(cert._id)} 
                                    className="px-6 py-2 mx-auto tracking-wide text-blue-400 capitalize transition-colors duration-300 transform"
                                >
                                    View Certificate
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* View Certificate Modal */}
            {viewCertificateId && selectedCertificate && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto transition duration-300 ease-out transform"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl sm:my-8 sm:w-full sm:p-6">
                            <div className="flex items-center justify-center mx-auto">
                                <img
                                    className="h-full rounded-lg"
                                    src={selectedCertificate.certificateImage}
                                    alt="Certificate"
                                />
                            </div>
                            <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                <button
                                    onClick={handleCloseCertificateView}
                                    className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificatesInfo;