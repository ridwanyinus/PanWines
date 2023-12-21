import { IoIosArrowDown } from "react-icons/io";
import arrowdown from "public/assets/arrowdown.svg";
import Image from "next/image";
import { ProductList } from "@app/constants/data";
import Link from "next/link";
const page = () => {
  return (
    <section className="md:px-8 py-6 sm:py-10">
      <div className="flex justify-between items-start flex-wrap small:px-4 max-small:px-2">
        <div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[150%] text-primary mb-6">Results Found</p>
        </div>

        <div className="flex max-md:flex-col max-md:items-start items-center md:gap-4 lg:gap-12  ">
          <p className="text-primary text-[14px] sm:text-xl lg:text-2xl font-bold leading-[133.333%] ">Sort By</p>

          <div className="outline-none border border-primary rounded sm:rounded-xl border-opacity-[60%] flex items-center px-5 sm:px-16 md:px-24 xl:px-32 py-2 lg:py-3 ">
            <p className="text-primary max-sm:text-xs lg:text-[20px] leading-[120%] font-medium  sm:text-xl">Relevance</p>
            <Image src={arrowdown} alt="arrowdown" className=" max-sm:w-[12px] ml-1 sm:ml-3" />
          </div>
        </div>
      </div>

      <div className="flex  lg:gap-8 flex-wrap justify-center mt-12">
        {ProductList.map((item) => (
          <div className="h-full flex flex-col max-xl:border-2 border-slate max-xl:rounded-xl max-xl:p-2 max-lg:mb-6 max-lg:mx-2 max-xl:shadow-lg lg:mb-20" key={item.id}>
            <Image
              src={item.imgUrl}
              alt={item.name}
              className="w-auto h-auto  md:w-[40vw] lg:w-[25vw] xl:w-[370px] widescreen:w-[400px] sm:w-[38vw] small:w-[70vw] xl:h-[60vh] small:h-[40vh] max-small:h-[30vh] max-small:w-[75vw]  cursor-pointer relative"
            />
            <p className="text-primary leading-[116.667%]  text-base lg:text-xl xl:text-2xl font-medium lg:mt-3 mt-1">{item.name}</p>
            <p className="mt-1 sm:mt-2 xl:mt-3 text-primary leading-[116.667%] text-xs lg:text-base xl:text-[20px] font-medium">${item.price}</p>
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
    </section>
  );
};

export default page;
