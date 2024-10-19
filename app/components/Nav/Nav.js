"use client";

import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";
import "./nav.css"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const onButtonClick = () => {
    fetch("/assets/documents/FCL_Brochure.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "FCL_Brochure.pdf";
        alink.click();
      });
    });
  };

  const navItems = (
    <>
      <li className="border-b  home lg:border-b-0 my-2 lg:my-0">
        <Link href="/">Home</Link>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/about">About Us</Link>
      </li>
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center">
          Associates <GoChevronDown className="ml-1 font-bold" />
        </span>
        <ul className="absolute associates lg:left-[-370px] lg:w-[1530px] z-[9999] mt-0.5 hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <Link href="/sub-company">
              <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
                <figure>
                  <img
                    className="w-52 h-52"
                    src="https://i.postimg.cc/LsR1YHLM/fcl-02.png"
                    alt="M/S MAN ENTERPRISE"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-sm text-center">M/S MAN ENTERPRISE</h2>
                </div>
              </div>
            </Link>
            <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
              <figure>
                <img
                  className="w-52 h-52"
                  src="https://i.postimg.cc/SNM2gXGh/fcl-03.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-sm text-center">
                  MR DRILLING & CONSTRUCTION LTD.
                </h2>
              </div>
            </div>
          </div>
        </ul>
      </li>
      <li className="lg:hidden border-b my-2">
        <details>
          <summary className="cursor-pointer">Associates</summary>
          <ul className="p-4">
            <li className="mb-2">
              <Link href="/sub-company">MAN Enterprise</Link>
            </li>
            <li>
              <a href="#">MR. Drilling & Construction Ltd.</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/area-of-activities">Areas of Activities</Link>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/projects">Projects</Link>
      </li>
      <li className="lg:hidden border-b my-2">
        <details>
          <summary className="cursor-pointer">Equipment</summary>
          <ul className="p-4">
            <li className="mb-2">
              <Link href="/list-equipments">Equipment List</Link>
            </li>
            <li>
              <Link href="/photo-equipments">Equipment Photos</Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center">
          Equipment <GoChevronDown className="ml-1 font-bold" />
        </span>
        <ul className="absolute ease-in duration-300 lg:left-[-850px] lg:w-[1530px] z-[9999] mt-1 hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity ease-in-out p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href="/list-equipments">
                <figure>
                  <img
                    className="w-full h-52 rounded-xl"
                    src="https://t4.ftcdn.net/jpg/02/49/04/93/360_F_249049329_BpYUPt5TGST3qTTfOJVpTakAdCLFzcg1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Equipment List</h2>
                </div>
              </Link>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href="/photo-equipments">
                <figure>
                  <img
                    className="w-full h-52 rounded-xl"
                    src="https://nmccat.com/wp-content/uploads/2020/09/Cat-Backhoe-1.jpg"
                    alt="FCL"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Equipment Photos</h2>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/csr">CSR</Link>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/career">Career</Link>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/gallery">Gallery</Link>
      </li>
      <li className="border-b lg:border-b-0 my-2 lg:my-0">
        <Link href="/contact">Contact Us</Link>
      </li>
    </>
  );


  return (
    <div className="navbar bg-base-100 border-b">
      <div className="container mx-auto lg:max-w-[1500px] flex items-center justify-between">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className={`${menuOpen ? "block" : "hidden"
                } menu menu-sm dropdown-content bg-base-100 z-[9999] mt-[9px]  w-[360px] p-2`}
            >
              <div className="flex justify-end">
                <button
                  onClick={closeMenu}
                  className="text-[18px] border hover:bg-red-500 hover:text-white rounded px-2 py-1"
                >
                  ✖
                </button>
              </div>
              {navItems}
            </ul>
          </div>
          <Link href="/">
            <img
              src="https://i.postimg.cc/DykGJf6G/fcl-01.png"
              alt="FCL logo"
              className="w-10 md:w-14 h-10 md:h-14"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
        </div>
        <div className="navbar-end flex items-center">
          <button
            onClick={onButtonClick}
            className="bg-black text-white hover:bg-green-700 duration-500 rounded-full px-5 py-2 flex items-center"
          >
            Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
