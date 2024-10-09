"use client"
import Image from "next/image";
import React from "react";
interface Product {
    id: number;
    name: string;
    image: string;
  }
  
  interface ProductSliderProps {
    products: Product[];
  }
  
  const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
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
        <div className="overflow-x-auto whitespace-nowrap h-80 " ref={sliderRef}>
          <div className="flex space-x-4">
            {products.map(product => (
              <div key={product.id} className="inline-block p-4">
                <Image src={product.image} alt={product.name} className="w-80 h-80 object-cover" height={500} width={500} />
                <h3 className="mt-2 text-center">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded">Right</button>
      </div>
    );
  };
  export default ProductSlider;