import { CiSearch } from "react-icons/ci";
import search from "public/assets/search.svg";
import Image from "next/image";

const Search = () => {
  return (
    <main className="bg-white py-16 px-10">
      <div className="flex justify-start sm:justify-between">
        <div className="flex  border-primary border rounded-xl max-xs:w-[90%] max-sm:w-[60%] lg:w-[40%] w-[40%] justify-between outline-none h-fit">
          <input
            type="text"
            placeholder="Search Name"
            className="sm:text-xl font-medium leading-[120%] text-primary placeholder:text-primary placeholder:font-medium outline-none pl-4 md:py-4 m-1 placeholder:opacity-[0.6] w-full placeholder:text-[14px] md:placeholder:text-base lg:placeholder:text-xl"
          />
          <span className="bg-primary rounded-r-[10px] outline-none border-none flex justify-center md:px-1 items-center text-white font-bold">
            <Image src={search} alt="search" quality={100} className="cursor-pointer max-w-[40px]" />
          </span>
        </div>

        <div className="flex  border-primary border rounded-xl  max-sm:hidden lg:w-[40%] w-[40%] justify-between outline-none h-fit">
          <input
            type="text"
            placeholder="Search Categories"
            className="sm:text-xl font-medium leading-[120%] text-primary placeholder:text-primary placeholder:font-medium outline-none pl-4 md:py-4 m-1 placeholder:opacity-[0.6] w-full placeholder:text-[14px] md:placeholder:text-base lg:placeholder:text-xl"
          />
          <span className="bg-primary rounded-r-[10px] outline-none border-none flex justify-center md:px-1 items-center text-white font-bold">
            <Image src={search} alt="search" quality={100} className="cursor-pointer max-w-[40px]" />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Search;
