import ProductSlider from "./ProductSlider";

const products = [
    { id: 1, name: 'Cushions', image: '/images/products/product1.jpg' },
    { id: 2, name: 'Flowers', image: '/images/products/product2.jpg' },
    { id: 3, name: 'Sofa ', image: '/images/products/product3.jpg' },
    { id: 1, name: 'Guldan', image: '/images/products/product4.jpg' },
    { id: 2, name: 'Lamp', image: '/images/products/product5.jpg' },
    { id: 3, name: 'Sofa', image: '/images/products/product6.jpg' },
    // Add more products as needed
  ];
export default function ProductSection(){
    return(
        <section id="product" className="min-h-screen">
              <h1 className="text-4xl text-center pb-10 pt-10 font-bold mb-4">Products</h1>
              <ProductSlider products={products} />
        </section>
    )
}