import map from "../../../public/images/map.jpg"
import phone from "../../../public/images/contact/phone.png"
import address from "../../../public/images/contact/address.png"
import email from "../../../public/images/contact/email.png"
import joinus2 from "../../../public/images/contact/join-us1.jpg"
import joinus1 from "../../../public/images/contact/join-us2.png"

import Image from "next/image"
import Link from "next/link"
export default function ContactSection(){
    return(
        <section id="contact" className="min-h-screen  relative">
            <h2 className="text-4xl font-bold text-center pb-20 pt-20"  >Contact Us</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 text-center gap-x-4 gap-y-10">
                <div className="bg-blue-50 p-x-4 py-10  px-10 ">
                  <div className="flex justify-center items-center h-40">
                  <Image src={address} alt="address" height={100} width={100}/>
                  </div>
                <h3 className="text-xl">ADDRESS</h3>
                <p className="text-xl font-bold">234 Hai Trieu, Ho Chi Minh City, 
                Viet Nam</p></div>
                <div className="bg-blue-50 p-x-4 pt-10 pb-10">
                <div className="flex justify-center items-center h-40">
                <Image src={phone} alt="phone" height={100} width={100}/>
                </div>
                    <h3 className="text-xl">Contact Us</h3>
                    <p className="text-xl font-bold">+84 234 567 890</p>
                </div>
                
                <div className="bg-blue-50 p-x-4 pt-10 pb-10">
                <div  className="flex justify-center items-center h-40">
                <Image src={email} alt="email" height={100} width={100}/>
                </div>
                    <h3 className="text-xl">EMAIL</h3>
                    <p className="text-xl font-bold">hello@3legant.com
                    </p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div className="bg-blue-50">

            <form className="flex flex-col pr-10 pl-10">
                   <div className="mb-6">
                   <label htmlFor="email" typeof="email" className=" block mb-2  text-md font-bold ">
                        Your Email</label>
                    <input className=" rounded-lg block w-full p-2.5" type="text" id="subject" required placeholder="example.com"/>

                   </div>
                   <div className="mb-6">
                   <label htmlFor="subject" typeof="subject" className="block mb-2 text-md font-bold">
                        Subject</label>
                    <input className=" rounded-lg block w-full p-2.5" type="text" id="subject" required placeholder="just saying hi"/>

                   </div>
                   <div className="mb-6">
                    <label htmlFor="message"
                    className=" block text-md mb-2 font-bold">
                            Message
                    </label>
                    <textarea name="message" id="message"
                    className="rounded-lg block w-full p-2.5"
                    placeholder="let's talk about.."/>
                   </div>
                   <button type="submit" className="font-medium py-2.5 rounded-lg w-full text-white bg-black">Send Message</button>
                </form>
                </div>
                <div className="flex justify-center items-center object-cover">
                <Image src={map} alt="map location pic" height={500} width={500}/>
            </div>
            </div>

            <div className="bg-blue-50 h-100">
    <div className="border-b-2 border-white w-full my-4 grid grid-cols-1 md:grid-cols-3"></div>
    <div className="bg-blue-50 h-100">
    <div className="border-b-2 border-white w-full my-4 grid grid-cols-1 md:grid-cols-3"></div>

    <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
            <Image src={joinus1} alt="home decoration item" width={400} height={400} />
        </div>

        <div className="flex-1 text-center">
            <h3 className="text-3xl md:text-4xl mb-2">Join Our Newsletter</h3>
            <h4 className="text-lg md:text-xl mb-4">Sign up for deals, new products, and promotions</h4>
            <div className="flex flex-col md:flex-row items-center border-b-2 border-black justify-center my-10">
                <label className="mr-4" htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    className="border-b-2 border-black outline-none px-2 py-1 mb-2 md:mb-0"
                    required
                />
                <Link href="signup" className="px-4 py-2 ">
                    Signup
                </Link>
            </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mb-4 md:mb-0">
            <Image src={joinus2} alt="home decoration item" width={400} height={400} />
        </div>
    </div>
</div>

</div>




          
        
            

        </section>
    )
}