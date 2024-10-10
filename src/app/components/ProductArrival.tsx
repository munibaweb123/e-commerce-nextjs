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
    const sliderRef = React.useRef<HTMLDivElement>(null);
  
    const scrollLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    };
  
    return (
      <div className="relative">
         <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded">Left</button>
        <div className="overflow-x-auto whitespace-nowrap h-100 " ref={sliderRef}>
          <div className="flex space-x-4">
            {products.map(product => (
              <div key={product.id} className="inline-block px-4 bg-blue-50">
                <Image src={product.image1} alt={product.name} className="w-80 h-80 object-cover" height={500} width={500} /><br/>
                <h3 className="mt-2 text-left ">{product.name}</h3>
          <div className="flex gap-x-2">
          <h4 className="mt-2 text-left">{product.read}</h4>
          <Image src={product.image2} alt={product.name} className="w-15 h-10 object-cover pr-10" height={100} width={100}/>
          </div>
                
                
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded">Right</button>
      </div>
    );
  };
  export default ProductArrival;