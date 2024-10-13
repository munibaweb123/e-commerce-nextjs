

import Link from "next/link"
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"



export default function Footer(){
    return(
        <footer className="flex flex-col px-20  bg-gray-900 text-white h-52">
            
                <div className="flex justify-between py-14">
                <div className="flex gap-x-4">
                <h2 className="text-2xl font-bold text-center">Home Decor. </h2>
                <h3 className="text-2xl gap-x-4 flex">| <span>Gift and Decoration Store</span></h3>
                </div>
                <div className="flex space-x-4 text-2xl">
                <Link href="/" className="text-white hover:font-bold px-3 rounded-md font-medium">Home</Link>
                <Link href="#shop" className="text-white  hover:font-bold px-3 rounded-md font-medium">Shop</Link>
                <Link href="#product" className="text-white   hover:font-bold px-3  rounded-md font-medium">Product</Link>
                <Link href="#contact" className="text-white  hover:font-bold px-3 rounded-md  font-medium">Contact</Link>
              </div>
              </div>
                
                <div className="border-b-2 border-white "></div>
                
                
               <div className="text-2xl py-2 ">
               <p className="flex justify-between">&copy; copyright reserved by Home Decor. <span className="font-bold">Privacy Policy</span><span className="font-bold"> Terms of Use</span>
               <FaFacebook/>
               <FaInstagram/>
               <FaLinkedin/>
               <FaGithub/>
               </p>
               
               </div>
        
        </footer>
    )
}