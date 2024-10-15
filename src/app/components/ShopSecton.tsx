import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import the right arrow icon

export interface Product {
  id: number;
  name: string;
 
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Living Room',
  
    imageUrl: '/images/shop/shop1.jpg',
  },
  {
    id: 2,
    name: 'Dining Room',
  
    imageUrl: '/images/shop/shop2.jpg',
  },
  {
    id: 3,
    name: 'Drawing Room',
   
    imageUrl: '/images/shop/shop3.jpg',
  },
  // Add more products as needed
];

const ProductCard: React.FC<Product & { isFeatured?: boolean }> = ({ name,  imageUrl, isFeatured }) => {
  return (
    <div className={`border rounded-lg shadow-lg overflow-hidden grid gap-6 ${isFeatured ? 'md:col-span-1 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`}>
      <div className="relative">
        <div className="absolute top-0 left-0 text-4xl pt-10 pl-10 p-2 z-10">
          <h3 className="font-semibold">{name}</h3>
          <div className='flex justify-between items-center underline text-2xl'>
          <p>Shop Now.</p>
          <AiOutlineArrowRight size={20} className="font-bold" /> {/* Use the right arrow icon */}
        </div>
        </div>
        <Image 
          src={imageUrl} 
          alt={name} 
          width={500} 
          height={500} 
          className={`w-full h-full ${isFeatured ? 'row-span-2' : ''}`} 
        />
      </div>
     
    </div>
  );
};

const Shop: React.FC = () => {
  return (
    <section id="shop" className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            {...product} 
            isFeatured={index === 0} // Set the first product as featured
          />
        ))}
      </div>

      <div className='flex justify-between pt-10 pb-10'>
        <h1 className="text-4xl font-bold mb-6">New <br/><span>Arrivals</span></h1>
        <div className='flex justify-between items-center underline'>
          <p>More Products.</p>
          <AiOutlineArrowRight size={20} className="ml-2" /> {/* Use the right arrow icon */}
        </div>
      </div>
    </section>
  );
};

export default Shop;
