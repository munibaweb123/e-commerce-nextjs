import home1 from "../../../public/images/home1.jpg"
// import Image from "next/image"
import Slider from "./Slider";

const images = [
    // <Image src={home1} alt="home decoration background pic" height={1000} width={1400}/>,
'/images/home1.jpg',
  '/images/home2.jpg',
  '/images/home3.jpg',
  // Add more images here

]
export default function HeroSection(){
    return (
    <div className="flex items-center justify-center min-h-screen">
      <Slider images={images} />
    </div>
  );
}