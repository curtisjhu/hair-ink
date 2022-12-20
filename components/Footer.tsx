function Footer() {
    return (
        <footer className="flex flex-col lg:grid lg:grid-cols-5 w-full bg-black text-white px-10 py-5">
            <div>
                <h3 className="font-bold underline">Hair Ink. Inc.</h3>
                <p>Questions</p>
                <p>Help</p>
            </div>
            <div >
                <h3 className="font-bold underline">Products</h3>
                <p>Teams</p>
                <p>Advertising</p>
                <p>Collectives</p>
                <p>Talent</p>
            </div>
            <div >
                <h3 className="font-bold underline">Company</h3>
                <p>About</p>
                <p>Press</p>
                <p>Work</p>
                <p>Legal</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Contact Us</p>
                <p>Cookie Policy</p>
            </div>
            <div >
                <h3 className="font-bold underline">Network</h3>
                <p>Technology</p>
                <p>Culture</p>
                <p>Life and Arts</p>
                <p>Science</p>
                <p>Professional</p>
                <p>Business</p>
                <p>API</p>
                <p>Data</p>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-row flex-wrap space-x-3 font-bold underline">
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                </div>
                <div className="font-thin">
                    Site design / logo © {new Date().getFullYear()} Curtis Hu
                    Labs Inc; user contributions licensed under CC BY-SA. rev
                    2074.12.19.43125
                </div>
            </div>
        </footer>
    );
}

export default Footer;
