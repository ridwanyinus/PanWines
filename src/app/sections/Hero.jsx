// import hero from "public/assets/hero.png";
import hero from "public/assets/hero.jpg";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="h-full w-full relative background ">
      <div className="absolute top-0 -z-10">
        <Image src={hero} placeholder="blur" quality={100} alt="wines" className="object-cover h-screen" />
      </div>

      <div className="flex justify-center items-center flex-col pt-20 lg:pt-28">
        <h1 className=" text-white font-bold text-3xl xs:text-[36px] sm:text-[40px]   md:text-5xl  lg:text-6xl leading-[120%] lg:w-[776px] text-center max-small:w-[75%] ">
          Tastefulness & Elegance <br className="max-small:hidden" /> of a Best Wine
        </h1>
        <p className="text-white text-center text-[20px] md:text-2xl font-medium leading-[133.333%] mt-8">Browse our collection to find that delectable taste you desire</p>

        <Link href="/products">
          <button
            type="button"
            className="text-white text-lg sm:text-2xl xl:text-[32px] font-semibold leading-[112.5%] mt-16 xl:mt-24 bg-primary rounded-xl px-5 sm:px-8 py-5 lg:px-12 lg:py-6  hover:border border-white  ">
            Explore Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
