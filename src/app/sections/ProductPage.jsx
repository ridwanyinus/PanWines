import { Products } from "@app/constants/data";
import Image from "next/image";
import Link from "next/link";
import arrow from "public/assets/arrow.png";

const ProductPage = () => {
  return (
    <section className="bg-white pb-16 px-4 sm:px-10 w-full">
      <h1 className="max-xs:text-2xl text-3xl font-semibold leading-normal text-primary mb-6">Products</h1>
      <div className="flex  lg:gap-8 flex-wrap justify-center">
        {Products.map((item) => (
          <div className="h-full flex flex-col max-xl:border-2 border-slate max-xl:rounded-xl max-xl:p-2 max-lg:mb-6 max-lg:mx-2 max-xl:shadow-lg" key={item.id}>
            <Image
              src={item.imgUrl}
              alt={item.name}
              priority={true}
              className="w-auto h-auto  md:w-[40vw] lg:w-[25vw] xl:w-[370px] widescreen:w-[400px] sm:w-[38vw] small:w-[70vw] xl:h-[60vh] small:h-[40vh] max-small:h-[30vh] max-small:w-[75vw]  cursor-pointer relative"
            />
            <p className="text-primary leading-[116.667%]  text-base lg:text-xl xl:text-2xl font-medium lg:mt-3 mt-1">{item.name}</p>
            <p className="mt-1 sm:mt-2 xl:mt-3 text-primary leading-[116.667%] text-xs lg:text-base xl:text-[20px] font-medium ">${item.price}</p>
            <Link href="/products/shoppingCart/cart">
              <button
                type="button"
                className="text-white md:text-xl xl:text-2xl font-medium leading-[133.333%]  bg-primary rounded-xl pl-10 small:pl-16 py-3 lg:py-2 mt-4  text-start w-full hover:shadow-lg shadow-primary">
                Add To Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 w-full pt-16 md:pt-20 pb-12 md:pb-20">
        <a href="/" className="text-center text-primary opacity-[60%] text-2xl md:text-3xl font-semibold leading-[125%] underline hover:opacity-80">
          View More
        </a>
        <Image src={arrow} alt="navigation arrow" quality={100} />
      </div>
    </section>
  );
};

export default ProductPage;
