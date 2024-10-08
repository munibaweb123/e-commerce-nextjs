

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
      name: 'Product 1',
      price: 29.99,
      description: 'This is a description of Product 1.',
      imageUrl: "/images/shop/shop1.jpg",
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      description: 'This is a description of Product 2.',
      imageUrl: '/images/shop/shop2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      description: 'This is a description of Product 3.',
      imageUrl: '/images/shop/shop3.jpg',
    },
    // Add more products as needed
  ];

const Shop:React.FC<Product> = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <Image src={product.imageUrl} alt={product.name}  width={500} height={500}/>
            <div className="p-4">
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
    </div>
  );
};

export default Shop;