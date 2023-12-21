import { Products } from "@app/constants/data";
import Image from "next/image";
import Link from "next/link";
import arrow from "public/assets/arrow.png";

const ProductPage = () => {
  return (
    <section className="bg-white pb-16 px-10 w-full">
      <h1 className="max-xs:text-2xl text-3xl font-semibold leading-normal text-primary mb-6">Products</h1>
      <div className="flex gap-12 lg:gap-8 flex-wrap justify-center ">
        {Products.map((item) => (
          <div className="h-full flex flex-col" key={item.id}>
            <Image
              src={item.imgUrl}
              alt={item.name}
              className="w-auto  md:w-[70vw] lg:w-[346px] xl:w-[370px] widescreen:w-[400px] max-sm:h-[480px] max-small:h-[400px] max-small:w-[80vw]  eighty cursor-pointer relative"
            />
            <p className="text-primary leading-[116.667%] text-lg xs:text-2xl font-medium mt-4">{item.name}</p>
            <p className="mt-3 text-primary leading-[116.667%] text-base small:text-[20px] font-medium ">${item.price}</p>
            <Link href="/shoppingCart">
              <button
                type="button"
                className="text-white sm:text-2xl font-medium leading-[133.333%]  bg-primary rounded-xl pl-10 small:pl-16 py-3 lg:py-2 mt-4  text-start w-full hover:shadow-lg shadow-primary">
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
