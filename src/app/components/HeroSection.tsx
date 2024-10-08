
import Slider from "./Slider";
import Image from "next/image";
import coupon from "../../../public/images/coupon.png"
import arrow from "../../../public/images/arrow.png"

const images = [
  // <Image src={home1} alt="home decoration background pic" height={1000} width={1400}/>,
'/images/home1.jpg',
'/images/home2.jpg',
'/images/home3.jpg',
// Add more images here

]
export default function HeroSection(){
    return (
    <div className="flex-1 justify-normal h-auto">
      <div>
      <Slider images={images} />
      </div>
      <div className="flex gap-x-4 ">
        <div className="flex justify-center items-center pt-10 pb-10">
          <h2 className="text-6xl font-bold">Simply Unique/ Simply Better.</h2>
        </div>

        <div className="text-2xl flex justify-center items-center">
          <h3>Home Decor. is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </h3>
        </div>

      </div>
      <div className="flex items-center justify-center">
        <Image src={coupon} alt="coupon icon" width={50} height={50}/>
        <h3 className="pl-10 text-2xl font-bold">30% off storewide — Limited time! <span className="text-blue-600">Shop Now.</span></h3>
      <Image src={arrow} alt="right arrow icon" width={60} height={40}/>
      </div>
    </div>
  );
}