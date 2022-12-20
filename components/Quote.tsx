import Image from "next/image";

type QuoteProps = {
    src: string;
    quote: String;
    name: String;
    profession: String;
};

const Quote = ({ src, quote, name, profession }: QuoteProps) => {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl dark:bg-slate-800">
            <Image
                className="w-24 h-24 2xl:w-48 2xl:h-48 rounded-full mx-auto"
                src={src}
                alt=""
                width="384"
                height="512"
            />
            <div className="pt-6 md:p-8 text-center lg:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">{quote}</p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">{name}</div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {profession}
                    </div>
                </figcaption>
            </div>
        </figure>
    );
};

export default Quote;
