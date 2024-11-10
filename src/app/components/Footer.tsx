import Link from "next/link";
import Image from "next/image"
import joinus2 from "../../../public/images/contact/join-us1.png"
import joinus1 from "../../../public/images/contact/join-us2.png"

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (<div>
          <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-blue-50">
        <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
            <Image src={joinus1} alt="home decoration item" width={400} height={400} />
        </div>

        <div className="flex-1 text-center">
            <h3 className="text-3xl md:text-4xl mb-2">Join Our Newsletter</h3>
            <h4 className="text-lg md:text-xl mb-4">Sign up for deals, new products, and promotions</h4>
            <div className="flex flex-col md:flex-row items-center border-b-2 border-black justify-center my-10">
                <label className="mr-4" htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    className="border-b-2 border-black outline-none px-2 py-1 mb-2 md:mb-0"
                    required
                />
                <Link href="signup" className="px-4 py-2 ">
                    Signup
                </Link>
            </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mb-4 md:mb-0">
            <Image src={joinus2} alt="home decoration item" width={400} height={400} />
        </div>
    </div>
    <footer className="flex flex-col sm:flex-row px-4 sm:px-20 bg-gray-900 text-white h-auto sm:h-72 flex-wrap">
          
            
          <div className="flex flex-col sm:flex-row justify-between py-14 w-full">
              <div className="flex gap-x-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-center">Home Decor.</h2>
                  <h3 className="text-xl sm:text-2xl flex">| <span className="px-12">Gift and Decoration Store</span></h3>
              </div>
              <div className="flex flex-wrap space-x-4 text-lg sm:text-2xl mt-4 sm:mt-0">
                  <Link href="/" className="text-white hover:font-bold px-3 rounded-md font-medium">Home</Link>
                  <Link href="/shop" className="text-white hover:font-bold px-3 rounded-md font-medium">Shop</Link>
                  <Link href="/product" className="text-white hover:font-bold px-3 rounded-md font-medium">Product</Link>
                  <Link href="../contact" className="text-white hover:font-bold px-3 rounded-md font-medium">Contact</Link>
              </div>
          </div>

          <div className="border-b-2 border-white w-full my-4"></div>

          <div className="text-lg sm:text-2xl py-2 flex flex-col sm:flex-row gap-x-32 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-x-4">
                  &copy; copyright reserved by Home Decor.
                  <span className="font-bold cursor-pointer mx-1">Privacy Policy</span>
                  <span className="font-bold cursor-pointer mx-1">Terms of Use</span>
              </div>
              <div className="flex space-x-8 mt-2 sm:mt-0 ">
                  <Link href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-gray-400">
                      <FaFacebook />
                  </Link>
                  <Link href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-gray-400">
                      <FaInstagram />
                  </Link>
                  <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-gray-400">
                      <FaLinkedin />
                  </Link>
                  <Link href="https://github.com" aria-label="GitHub" className="text-white hover:text-gray-400">
                      <FaGithub />
                  </Link>
              </div>
          </div>
          
      </footer>
    </div>
      
    );
}