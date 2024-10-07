import Image from "next/image";
import Link from "next/link";
import search from "../../../public/images/search_icon.svg"
import profile from "../../../public/images/person_account_icon.svg"
import shop from "../../../public/images/shop_icon.svg"

export default function Header(){
    return(
       <header className="flex justify-evenly p-y-2">
        {/* logo */}
        <div>
            <h1 className="text-2xl text-gray-900 font-bold">Home Decor.</h1>
        </div>
        <nav>
            <ul className="flex gap-x-4 pl-10 pr-10">
                <li className="text-xl text-gray-800 hover:text-black hover:font-bold"><Link href="/">Home</Link></li>
                <li className="text-xl text-gray-800 hover:text-black hover:font-bold"><Link href="/">Shop</Link></li>
                <li className="text-xl text-gray-800 hover:text-black hover:font-bold"><Link href="/">Product</Link></li>
                <li className="text-xl text-gray-800 hover:text-black hover:font-bold"><Link href="/">Contact Us</Link></li>
            </ul>
        </nav>
        <div className="flex gap-x-2">
            <button>
                <Image src={search} alt="search button" height={20} width={20}/>
            </button>
            <button>
                <Image src={profile} alt="profile button" height={20} width={20}/>
            </button>
            <button>
                <Image src={shop} alt="shop cart button" height={20} width={20}/>
            </button>
        </div>
       </header>
    )
}