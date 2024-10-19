import Link from "next/link";
import React from "react";
import logo from "@/public/assets/logo/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="tracking-wide text-[20px]  text-gray-300 font-extrabold">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Explore Us
                  </a>
                </li>
                <li>
                  <a
                    href="/area-of-activities"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Area Of Activities
                  </a>
                </li>
                <li>
                  <a
                    href="/csr"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    CSR
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-extrabold tracking-wide text-[20px] text-gray-300">
                Legal Information
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Disclaimer
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-extrabold tracking-wide text-[20px] text-gray-300">
                Our Clients
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/projets"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-extrabold tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors hover:underline text-[14px] duration-300 hover:text-deep-purple-accent-200"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-extrabold tracking-wide text-gray-300">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-extrabold tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-white">
              Subscribe to our newsletter for updates and offers
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-white">
            © Copyright 2024. Designed and Developed by{" "}
            <Link
              href="https://www.goinnovior.com/"
              target="_blank"
              className="font-bold hover:text-green-500"
            >
              Goinnivior Limited
            </Link>
            .
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-colors duration-300 hover:text-teal-accent-400">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/farees-construction-ltd/?originalSubdomain=bd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-colors duration-300 hover:text-teal-accent-400">
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-colors duration-300 hover:text-teal-accent-400">
              <FaSquareFacebook />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
