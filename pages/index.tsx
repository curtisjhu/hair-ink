import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tile from "../components/Tile";
import Quote from "../components/Quote";

export default function Home() {
    return (
        <main className="w-full">
            <Header />

            <div className="my-72">
                <div className="w-fit mx-auto text-center">
                    <div className="w-fit text-5xl px-4 mb-4">
                        The #1 Hair Transplant Restoration Treatment in U.S.A of
                        America
                    </div>
                    <Link
                        href="/"
                        className="bg-black rounded-full px-3 py-2 font-bold text-white"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </div>

            <div className="my-72">
                <div className="w-full grid grid-cols-3 gap-3 px-10">
                    <div>
                        <div className="font-bold lg:text-5xl text-2xl">
                            Buy One Get One Free
                        </div>
                        <div className="text-md md:text-2xl">
                            Buy one hair transplant and you get another hair
                            transplant for FREE!
                        </div>
                    </div>
                    <div>
                        <div className="font-bold lg:text-5xl text-2xl">
                            Money Back Guarantee
                        </div>
                        <div className="text-md md:text-2xl">
                            If you are unsatisfied with your service, we will
                            refund you. No risks!
                        </div>
                    </div>
                    <div>
                        <div className="font-bold lg:text-5xl text-2xl">
                            Free Consult
                        </div>
                        <div className="text-md md:text-2xl">
                            Get a free consult today about your hair and our
                            options.
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <div className="w-fit px-8 grid grid-cols-2 mx-auto items-center">
                    <div>
                        <div className="font-bold text-5xl">
                            Track Your Progress
                        </div>
                        <div>Use our app to track metrics. </div>
                    </div>
                    <Image
                        src="/image/app.png"
                        alt=""
                        width={400}
                        height={600}
                    />
                </div>
            </div>
            <div className="my-20">
                <div className="grid grid-cols-3 gap-20 px-4">
                    <Quote
                        src="/image/m1.jpeg"
                        quote="I've never realized I've needed this treatment until I got cancer"
                        name="Harry Burns"
                        profession="City Barber"
                    />
                    <Quote
                        src="/image/m2.jpeg"
                        quote="Stress takes you places. I'm glad I've reevaluated my life and see what matters most: my looks."
                        name="Joshua Hugs"
                        profession="Stock Broker"
                    />
                    <Quote
                        src="/image/m3.jpeg"
                        quote="I started balding at age 22."
                        name="Alex Hamlin"
                        profession="Educator"
                    />
                    <Quote
                        src="/image/m4.jpeg"
                        quote="I'm actually not balding"
                        name="Harry Burns"
                        profession="Unemployed"
                    />
                    <Quote
                        src="/image/w1.jpeg"
                        quote="I like a man with a lot of hair. A LOT of hair."
                        name="Ida Mainman"
                        profession="Sales Representative"
                    />
                    <Quote
                        src="/image/m5.jpeg"
                        quote="Sup yo. I used to be 56. Now I'm 27. LMAO"
                        name="Jeffrey Shouls"
                        profession="Professor"
                    />
                </div>
            </div>

            <div></div>

            <div className="my-56">
                <div className="grid grid-cols-2 px-10 gap-10">
                    <Tile
                        src="/image/p1.jpeg"
                        product="Deluxe Package"
                        price={299.99}
                    />
                    <Tile
                        src="/image/p2.jpeg"
                        product="Douche Package"
                        price={199.99}
                    />
                    <Tile
                        src="/image/p3.jpeg"
                        product="Grand Package"
                        price={99.99}
                    />
                    <Tile
                        src="/image/p4.jpeg"
                        product="Starter Package"
                        price={9.99}
                    />
                </div>
            </div>

            <div className="my-56">
                <div className="mx-auto w-fit text-center">
                    <div className="font-bold text-5xl">Mailing List</div>
                    <div className="m-5">
                        <input
                            placeholder="Email..."
                            className="h-full outline-none border-2 rounded-full border-black p-3"
                            onChange={() => {}}
                        />
                        <button className="bg-black text-white p-3 h-full rounded-full">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
