import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#F5C7A9] px-6 sm:px-12 py-8 flex flex-col flex-wrap">
      <section className="flex justify-between max-md:flex-col">
        <div className="gap-4 md:gap-12 flex flex-col  ">
          <h1 className="text-primary text-[28px] md:text-[40px] font-bold leading-[125%]">PanWines</h1>
          <p className="text-primary text-xl sm:text-2xl lg:text-3xl font-medium leading-[120%]">
            Get the Tastefulness & <br className="" /> Elegance of a Best Wine
          </p>
        </div>

        <div className="flex max-md:justify-between gap-6 sm:gap-12 lg:gap-40 max-md:pt-12 flex-wrap max-sm:flex-col">
          <div className="flex flex-col">
            <h2 className="text-primary font-medium text-xl leading-[140%] pb-2">Homepage</h2>
            <Link href="/" className="text-primary opacity-[0.8] text-base font-normal leading-[125%] hover:opacity-100 hover:underline pb-1  max-small:text-[14px] w-fit">
              Home
            </Link>
            <Link href="/" className="text-primary opacity-[0.8] max-small:text-[14px] text-base font-normal leading-[125%] hover:opacity-100 hover:underline py-1  w-fit">
              Authentication
            </Link>
            <Link href="/products" className="text-primary opacity-[0.8] text-base font-normal leading-[125%] hover:opacity-100 hover:underline py-1 max-small:text-[14px] w-fit">
              Product
            </Link>
            <Link href="/products/shoppingCart" className="text-primary opacity-[0.8] text-base font-normal leading-[125%] hover:opacity-100 hover:underline py-1 max-small:text-[14px] w-fit">
              Shopping
            </Link>
          </div>

          <div className="flex flex-col">
            <h2 className="text-primary font-medium text-xl leading-[140%] pb-2">Contact Us</h2>
            <a href="/" className="text-primary opacity-[0.8] text-base font-normal leading-[125%] hover:opacity-100 pb-1 max-small:text-[14px] w-fit">
              Panwine@gmail.com
            </a>
            <a href="/" className="text-primary opacity-[0.8] text-base font-normal leading-[125%] hover:opacity-100 py-1 max-small:text-[14px] w-fit">
              www.PanWine.com
            </a>
            <p className="text-primary opacity-[0.8] text-base font-normal leading-[125%] hover:opacity-100 py-1 max-small:text-[14px] w-fit">+(234) 816 631 9747</p>
          </div>
          <div className="flex sm:justify-end items-end md:hidden pt-2">
            <Link href="/products">
              <button type="button" className="text-white text-lg sm:text-xl font-semibold leading-[112.5%]  bg-primary rounded-xl px-4 sm:px-6 py-5 ">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-end  w-full pt-2 max-md:hidden">
        <Link href="/products">
          <button type="button" className="text-white text-lg sm:text-2xl xl:text-[32px] font-semibold leading-[112.5%]  bg-primary rounded-xl px-5 sm:px-8 py-5 lg:px-12 lg:py-6   ">
            Explore Products
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
