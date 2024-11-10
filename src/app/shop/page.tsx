import Header from "../components/Header";

export default function Shop() {
    return (
        <div className="h-screen w-screen">
            <Header/>
            <div className="bg-cover flex items-center justify-center bg-center h-full relative"
                style={{ backgroundImage: "url('/images/shop/shop-bg.jpg')" }}>

                <div className="bg-transparent text-center">
                    <p>Home {'>'} Shop</p>
                    <h2 className="text-4xl">Shop Page</h2>
                    <p>Let’s design the place you always imagined.</p>
                </div>
            </div>
        </div>
    )
}
