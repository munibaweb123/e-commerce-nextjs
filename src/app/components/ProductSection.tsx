import ProductSlider from "./ProductSlider";
import Image from "next/image";
import arrow from "../../../public/images/arrow.png"
import ProductArrival from "./ProductArrival";
import { FaShippingFast } from 'react-icons/fa'; // Importing a shipping icon
import { FaMoneyBillWave } from 'react-icons/fa'; // Money bill icon
import { FaLock } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';





const products = [
    { id: 1, name: 'Cushions decor', image1: '/images/products/product1.jpg', image2:'/images/stars.png' ,price:'20$' },
    { id: 2, name: 'Flowers decor', image1: '/images/products/product2.jpg' , image2:'/images/stars.png', price: '15$'},
    { id: 3, name: 'Sofa decor', image1: '/images/products/product3.jpg' , image2:'/images/stars.png', price: '50$'},
    { id: 1, name: 'Guldan decor', image1: '/images/products/product4.jpg', image2:'/images/stars.png' , price: '30$'},
    { id: 2, name: 'Lamp decor', image1: '/images/products/product5.jpg', image2:'/images/stars.png' , price: '45$'},
    { id: 3, name: 'Sofa decor', image1: '/images/products/product6.jpg' , image2:'/images/stars.png', price: '55$'},
    // Add more products as needed
  ];

  const productsArrival = [
    { id: 1, name: '7 ways to decor your home.', read:'Read More.', image1: '/images/Arrivals/arrival1.jpg', image2:'/images/arrow.png' },
    { id: 2, name: 'Kitchen organization',read:'Read More.', image1: '/images/Arrivals/arrival2.jpg' , image2:'/images/arrow.png'},
    { id: 3, name: 'Bed Decoration ',read:'Read More.', image1: '/images/Arrivals/arrival3.jpg' , image2:'/images/arrow.png' },

    // Add more products as needed
  ];


export default function ProductSection(){
    return(
        <section id="product" className="min-h-screen ">
              
              <div className="flex justify-normal py-10"><ProductSlider products={products} /></div>

              <div className="h-100 grid grid-cols-1 md:grid-cols-4 bg-gray-50 gap-x-4 text-center gap-y-4 ">
                <div className="bg-blue-50 py-4">
                  <div className="flex justify-center items-center "><FaShippingFast size={50}/></div>
                  <h2 className="font-bold text-md">Free Shipping</h2>
                <p>Order above $200</p></div>
                <div className="bg-blue-50 py-4">
                  <div className="flex justify-center items-center"><FaMoneyBillWave size={50}/></div>
                  <h2 className="font-bold text-md">Money-back</h2>
                <p>30 days guarantee</p></div>
                <div className="bg-blue-50 py-4">
                <div className="flex justify-center items-center"><FaLock size={50}/></div><h2 className="font-bold text-md">Secure Payments</h2>
                <p>Secured by Stripe</p></div>
                <div className="bg-blue-50 py-4">
                <div className="flex justify-center items-center "><FaPhone size={50} className="transform scale-x-[-1]"/></div>
                   <h2 className="font-bold text-md">24/7 Support</h2>
                <p>Phone and Email support</p></div>
        
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="w-full h-full relative overflow-hidden">
                    <Image src="/images/products/product7.jpg" alt="sofa bed" width={500} height={500} className="w-full h-full object-cover px-10" />
                </div>
                <div className="py-40 bg-blue-50 px-10">
                    <h2 className="text-xl text-blue-400 font-semibold">SALE UP TO 35% OFF</h2>
                    <h3 className="text-4xl font-semibold">HUNDREDS of<br/>  <span>New lower prices!</span></h3>
                    <h4 className="text-2xl">It’s more affordable than ever to give every room in your home a stylish makeover</h4>
                 <div className="flex gap-x-4">   <h5 className="text-2xl">Shop Now.</h5>
                 <Image src={arrow} alt="right arrow" width={20} height={20}/></div>
                </div>
              </div>

              <div className="flex justify-normal py-10"><ProductArrival products={productsArrival} /></div>
        </section>
    )
}