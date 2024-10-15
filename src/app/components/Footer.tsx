import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row px-4 sm:px-20 bg-gray-900 text-white h-auto sm:h-72 flex-wrap">
          
            
            <div className="flex flex-col sm:flex-row justify-between py-14 w-full">
                <div className="flex gap-x-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-center">Home Decor.</h2>
                    <h3 className="text-xl sm:text-2xl flex">| <span className="px-12">Gift and Decoration Store</span></h3>
                </div>
                <div className="flex flex-wrap space-x-4 text-lg sm:text-2xl mt-4 sm:mt-0">
                    <Link href="/" className="text-white hover:font-bold px-3 rounded-md font-medium">Home</Link>
                    <Link href="#shop" className="text-white hover:font-bold px-3 rounded-md font-medium">Shop</Link>
                    <Link href="#product" className="text-white hover:font-bold px-3 rounded-md font-medium">Product</Link>
                    <Link href="#contact" className="text-white hover:font-bold px-3 rounded-md font-medium">Contact</Link>
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
    );
}