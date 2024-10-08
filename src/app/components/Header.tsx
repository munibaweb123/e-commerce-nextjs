"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import search from "../../../public/images/search_icon.svg";
import profile from "../../../public/images/person_account_icon.svg";
import shop from "../../../public/images/shop_icon.svg";
import Navbar from './Navbar';

export default function Header() {
  const [showAuthOptions, setShowAuthOptions] = useState(false);

  const toggleAuthOptions = () => {
    setShowAuthOptions((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center p-y-20 mb-10">
      {/* Logo */}
      <div>
        <h1 className="text-2xl text-gray-900 font-bold">Home Decor.</h1>
      </div>
      
      {/* Navigation */}
    <Navbar/>
      
      {/* Profile and Auth Options */}
      <div className="relative flex gap-x-2">
        <button>
          <Image src={search} alt="search button" height={20} width={20} />
        </button>
        <button onClick={toggleAuthOptions} className="text-gray-800">
          <Image src={profile} alt="profile button" height={20} width={20} />
        </button>
        <button>
          <Image src={shop} alt="shop cart button" height={20} width={20} />
        </button>

        {showAuthOptions && (
          <div className="absolute right-0 flex flex-col bg-gray-700 p-2 rounded shadow-md mt-2">
            <Link href="../../signup" className="text-white mb-2">
              Sign Up
            </Link>
            <Link href="../../login" className="text-white">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}