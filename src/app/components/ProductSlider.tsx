"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

interface Product {
  id: number;
  name: string;
  image1: string;
  image2: string;
  price: string;
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  return (
    <div className="relative overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-thick scrollbar-thumb-gray-500 scrollbar-track-gray-100">
      <div className="flex justify-evenly space-x-4">
        {products.map(product => (
          <div key={product.id} className="inline-block px-4 bg-blue-50 relative">
            <div className="flex flex-col items-center md:w-80 w-full">
              <div className="relative w-full">
                <Image
                  src={product.image1}
                  alt={product.name}
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
                  src={product.image2}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                  height={100}
                  width={100}
                />
              </div>
              <h3 className="mt-2 text-2xl text-left font-bold w-full">{product.name}</h3>
              <h4 className="mt-2 text-left font-bold w-full">{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
