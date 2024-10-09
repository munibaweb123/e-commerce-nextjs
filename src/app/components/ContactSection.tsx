import map from "../../../public/images/map.jpg"
import phone from "../../../public/images/contact/phone.png"
import address from "../../../public/images/contact/address.png"
import email from "../../../public/images/contact/email.png"
import Image from "next/image"
export default function ContactSection(){
    return(
        <section id="contact" className="min-h-screen  relative">
            <h2 className="text-4xl font-bold text-center pb-20 pt-20"  >Contact Us</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 text-center gap-x-4">
                <div className="bg-blue-50 p-x-4 pt-10 pb-10  px-10 ">
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

        </section>
    )
}