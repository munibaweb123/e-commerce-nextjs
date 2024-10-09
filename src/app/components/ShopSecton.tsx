
import Image from 'next/image';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Living Room',
    price: 29.99,
    description: 'Sofa for Living Room.',
    imageUrl: '/images/shop/shop1.jpg',
  },
  {
    id: 2,
    name: 'Living Room',
    price: 49.99,
    description:'Table For Living Room.',
    imageUrl: '/images/shop/shop2.jpg',
  },
  {
    id: 3,
    name: 'Living Room',
    price: 19.99,
    description: 'Plant Decoration for Living Room',
    imageUrl: '/images/shop/shop3.jpg',
  },
  {
    id: 3,
    name: 'Living Room',
    price: 199.99,
    description: 'LCD TV for Living Room',
    imageUrl: '/images/shop/shop4.jpg',
  },
  // Add more products as needed
];

const Shop: React.FC = () => {
  return (
    <section id='shop' className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl text-center pt-10 pb-10 font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              width={500} 
              height={500} 
              className="object-cover" // Optional for better image scaling
            />
            <div className="p-4 bg-blue-50">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;