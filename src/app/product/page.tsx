import Image from "next/image"
import { FaHeart } from "react-icons/fa"
import Header from "../components/Header"

export default function Product() {
  return (
    <div>
        <Header/>
      <h2>Home {'>'} Shop {'>'} Living Room {'>'} <span className="font-bold">Product</span></h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="block">
          {/* Main image */}
          <div className="w-full h-96 relative bg-blue-50">
            <Image 
              src="/images/products/tray-table.jpg" 
              alt="tray table" 
              layout="fill" // Ensures the image fills the container
              objectFit="contain" // Makes the image fit inside without cropping
            />
          </div>

          {/* Thumbnail images */}
          <div className="md:flex justify-evenly mt-4 w-full hidden">
            <div className="w-52 h-52 relative">
              <Image 
                src="/images/products/tray-table0.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <div className="w-52 h-52 relative">
              <Image 
                src="/images/products/tray-table1.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <div className="w-52 h-52 relative">
              <Image 
                src="/images/products/tray-table2.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>
        </div>

        <div >
          <h2 className="text-3xl">Tray Table</h2>
          <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
          <p className="font-bold text-2xl">$199.00 <span className="line-through font-light">$400.00</span></p>
          <p>Offer expires in:</p>
          <div className="flex gap-2 items-center">
            <div>
              <div className="bg-blue-50 text-3xl p-2 font-bold">02</div>
              <p className="text-sm">Days</p>
            </div>
            <div>
              <div className="bg-blue-50 text-3xl p-2 font-bold">12</div>
              <p className="text-sm">Hours</p>
            </div>
            <div>
              <div className="bg-blue-50 text-3xl p-2 font-bold">45</div>
              <p className="text-sm">Minutes</p>
            </div>
            <div>
              <div className="bg-blue-50 text-3xl p-2 font-bold">05</div>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
          <p className="text-lg text-gray-500">Measurements:</p>
          <p className="text-2xl">17 1/2x20 5/8 {"\""}</p>
          <p className="text-lg text-gray-500">Choose Color {'>'}</p>
          <p className="text-2xl">Black</p>
          <div className="flex ">
            <div className="w-32 h-32 relative">
              <Image 
                src="/images/products/tray-table.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <div className="w-32 h-32 relative">
            <Image 
                src="/images/products/tray-table3.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <div className="w-32 h-32 relative">
            <Image 
                src="/images/products/tray-table4.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <div className="w-32 h-32 relative">
            <Image 
                src="/images/products/tray-table5.jpg" 
                alt="tray table" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="p-2 bg-blue-50 text-2xl px-4"> - 1 +</button>
            <button className="flex gap-2 border-2 border-black px-4 p-2 rounded-md"><FaHeart/> Wishlist</button>
          </div>
          <button className="bg-black text-white p-2 w-full rounded-md m-2">Add to Cart</button>
          <div className="border-b-2 m-2 border-gray-200 w-full "></div>
          <div className="flex justify-start gap-2">   <div>
          <p>SKU</p>
          <p>CATEGORY</p>
          </div>
          <div>
          <p>1117</p>
          <p className="font-semibold">Living Room, Bedroom</p>
          </div></div>
       
        </div>
        
      </div>
    </div>
  )
}
