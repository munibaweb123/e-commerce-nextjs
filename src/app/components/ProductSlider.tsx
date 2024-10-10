"use client"
import Image from "next/image";
import React from "react";
interface Product {
    id: number;
    name: string;
    image1: string;
    image2: string;
    price:string;
  }
  
  interface ProductSliderProps {
    products: Product[];
  }
  
  const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  
 
    return (
      <div className="relative overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-thick scrollbar-thumb-gray-500 scrollbar-track-gray-100">
          <div className="flex justify-evenly space-x-4">
            {products.map(product => (
              <div key={product.id} className="inline-block px-4 bg-blue-50 ">
                <Image src={product.image1} alt={product.name} className="w-80 h-80 object-cover" height={500} width={500} /><br/>
                <Image src={product.image2} alt={product.name} className="w-80 h-20 object-cover pr-10" height={100} width={100}/>
                <h3 className="mt-2 text-2xl text-left font-bold w-100">{product.name}</h3>
                <h4 className="mt-2 text-left font-bold w-100">{product.price}</h4>
              </div>
            ))}
          </div>
        </div>
      
    );
  };
  export default ProductSlider;