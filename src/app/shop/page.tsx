import Header from "../components/Header";
import { MdFilterList } from 'react-icons/md';
import { FaTh } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { MdCheckBoxOutlineBlank,MdCheckBox } from 'react-icons/md';
import Image from "next/image"  
import { AiOutlineHeart } from "react-icons/ai";


export default function Shop() {
    return (
        <div className="min-h-screen w-screen">
            <Header/>
            <div className="bg-cover flex items-center justify-center bg-center h-screen relative"
                style={{ backgroundImage: "url('/images/shop/shop-bg.jpg')" }}>

                <div className="bg-transparent text-center">
                    <p>Home {'>'} Shop</p>
                    <h2 className="text-4xl">Shop Page</h2>
                    <p>Let’s design the place you always imagined.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-4">
                <div className="hidden md:col-span-1"><h2 className="flex text-2xl"><MdFilterList/> Filter</h2>
                <h3 className="font-bold text-lg">CATEGORIES</h3>
                <ul >
                    <li>All Rooms</li>
                    <li className="font-bold underline">Living Room</li>
                    <li>Bedroom</li>
                    <li>Kitchen</li>
                    <li>Bathroom</li>
                    <li>Dinning</li>
                    <li>Outdoor</li>
                </ul>
                <h3 className="font-bold text-lg">PRICE</h3>
                <ul>
                    <li className="flex justify-between">All Price <MdCheckBoxOutlineBlank size={20}/></li>
                    <li className="flex justify-between">$0.00 - 99.99 <MdCheckBox size={20}/> </li>
                    <li className="flex justify-between">$100.00 - 199.99 <MdCheckBoxOutlineBlank size={20}/></li>
                    <li className="flex justify-between">$200.00 - 299.99 <MdCheckBoxOutlineBlank size={20} /></li>
                    <li className="flex justify-between">$300.00 - 399.99 <MdCheckBoxOutlineBlank size={20}/></li>
                    <li className="flex justify-between">$400.00+ <MdCheckBoxOutlineBlank size={20}/></li>
                </ul>
                </div>
                <div className="col-span-3 p-2">
                    <div className="flex justify-evenly">
                    <h2 className="font-bold text-2xl">Living Room</h2>
                    <h3 className="flex gap-2 text-lg">Sort by <FiChevronDown/> <FaTh/> </h3>
                    </div>
                    {/* images container */}
                   <div className="grid md:grid-cols-3">
                    {/* first image div */}
                   <div className="flex flex-col items-center md:w-80 w-full">
              <div className="relative w-full">
                <Image
                  src={"/images/products/product1.jpg"}
                  alt={"product pic"}
                  height={500}
                  width={500}
                  className="object-cover h-80 w-80"
                />
                <div className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
                  <AiOutlineHeart size={24} className="text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="absolute top-0 left-0 flex flex-col items-start p-2 z-10">
                  <h3 className="font-semibold bg-white pt-1 pl-2 pr-2 my-2">New</h3>
                  <h3 className="font-semibold bg-green-400 pt-1 pl-2 pr-2">-50%</h3>
                </div>
              </div>
              <div className="mt-2 flex justify-start">
                <Image
                  src={"/images/stars.png"}
                  alt="product pic"
                  className="w-full h-auto object-cover"
                  height={100}
                  width={100}
                />
              </div>
              <h3 className="mt-2 text-2xl text-left font-bold w-full">Loveseat Sofa cushions</h3>
              <h4 className="mt-2 text-left font-bold w-full">$49.00 <span className="line-through">$60.00</span></h4>
            </div>
            {/* second image div */}
            <div className="flex flex-col items-center md:w-80 w-full">
              <div className="relative w-full">
                <Image
                  src={"/images/products/product2.jpg"}
                  alt={"product pic"}
                  height={500}
                  width={500}
                  className="object-cover h-80 w-80"
                />
                <div className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
                  <AiOutlineHeart size={24} className="text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="absolute top-0 left-0 flex flex-col items-start p-2 z-10">
                  <h3 className="font-semibold bg-white pt-1 pl-2 pr-2 my-2">New</h3>
                  <h3 className="font-semibold bg-green-400 pt-1 pl-2 pr-2">-50%</h3>
                </div>
              </div>
              <div className="mt-2 flex justify-start">
                <Image
                  src={"/images/stars.png"}
                  alt="product pic"
                  className="w-full h-auto object-cover"
                  height={100}
                  width={100}
                />
              </div>
              <h3 className="mt-2 text-2xl text-left font-bold w-full">Flower pot</h3>
              <h4 className="mt-2 text-left font-bold w-full">$19.00 <span className="line-through">$40.00</span></h4>
            </div>
            {/* third div */}
            <div className="flex flex-col items-center md:w-80 w-full">
              <div className="relative w-full">
                <Image
                  src={"/images/products/product3.jpg"}
                  alt={"product pic"}
                  height={500}
                  width={500}
                  className="object-cover h-80 w-80"
                />
                <div className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
                  <AiOutlineHeart size={24} className="text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="absolute top-0 left-0 flex flex-col items-start p-2 z-10">
                  <h3 className="font-semibold bg-white pt-1 pl-2 pr-2 my-2">New</h3>
                  <h3 className="font-semibold bg-green-400 pt-1 pl-2 pr-2">-50%</h3>
                </div>
              </div>
              <div className="mt-2 flex justify-start">
                <Image
                  src={"/images/stars.png"}
                  alt="product pic"
                  className="w-full h-auto object-cover"
                  height={100}
                  width={100}
                />
              </div>
              <h3 className="mt-2 text-2xl text-left font-bold w-full">Loveseat Sofa</h3>
              <h4 className="mt-2 text-left font-bold w-full">$199.00 <span className="line-through">$400.00</span></h4>
            </div>
                   </div>
                    </div>
                </div>
            
        </div>
    )
}
