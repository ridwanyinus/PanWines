import Link from "next/link";
const page = () => {
  return (
    <section className="flex h-screen flex-col justify-center items-center  w-full">
      <h1 className="text-primary font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-[125%] text-center mb-2 max-lg:mb-4">Your Shopping Cart is Empty</h1>
      <p className="text-primary font-medium text-[13px] xs:text-base sm:text-lg md:text-[20px] leading-[150%]">Explore our product page to add item(s) to your cart</p>
      <Link href="/products">
        <button
          type="button"
          className="text-white text-lg sm:text-2xl xl:text-[32px] font-semibold leading-[112.5%] mt-16 xl:mt-24 bg-primary rounded-xl px-5 sm:px-8 py-5 lg:px-12 lg:py-6 hover:shadow-xl">
          Explore Products
        </button>
      </Link>
    </section>
  );
};

export default page;
