"use client"
import Image from "next/image";
import React from "react";
interface Product {
    id: number;
    name: string;
    read: string;
    image1: string;
    image2: string;
    
  }
  
  interface ProductSliderProps {
    products: Product[];
  }
  
  const ProductArrival: React.FC<ProductSliderProps> = ({ products }) => {
 
  
    return (
      <div className="relative overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
          <div className="flex space-x-4">
            {products.map(product => (
              <div key={product.id} className="inline-block px-4 bg-blue-50  md:w-80">
                <div className="flex justify-around md:w-80 w-full h-80 object-cover">
                <Image src={product.image1} alt={product.name}  height={500} width={500} /><br/>

                </div>
                <h3 className="mt-2 text-left ">{product.name}</h3>
          <div className="flex gap-x-2">
          <h4 className="mt-2 text-left">{product.read}</h4>
          <Image src={product.image2} alt={product.name} className="w-15 h-10 object-cover pr-10" height={100} width={100}/>
          </div>
                
                
              </div>
            ))}
          </div>
        </div>
      
    );
  };
  export default ProductArrival;