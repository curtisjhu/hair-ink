import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div className="w-full bg-black flex">
            <div className="w-4/5 max-w-screen-lg mx-auto  my-3 flex flex-row flex-wrap justify-between text-white font-mono items-center">
                <div>
                    <Link href="/" className="flex flex-row items-center">
                        <Image src="/icon.png" alt="" width={40} height={50} />
						<div className="pl-3 font-extrabold text-2xl">
                        	Hair Ink.
						</div>
                    </Link>
                </div>
                <div className="flex flex-row space-x-3">
                    <Link href="/">Mailing List</Link>
                    <Link href="/">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
