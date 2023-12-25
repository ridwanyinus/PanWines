import Image from "next/image";
import Login from "public/assets/Login.png";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex bg-white h-fit w-full overflow-hidden">
      <div className="flex sm:flex-1 justify-start relative items-start h-full w-full">
        <Image src={Login} quality={100} placeholder="blur" alt="wine" className="sm:object-fill   h-screen max-small:h-[90vh]  w-[50vw]" />
        <p className="text-white absolute top-11 left-4 md:left-12 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[125%] font-bold">PanWines</p>
      </div>

      <div className="flex-1 max-small:pt-24 pt-6 px-4 md:px-6 lg:px-12 ">
        <h2 className="text-primary font-bold leading-normal max-md:text-center text-[14px] small:text-xl sm:text-2xl md:text-3xl mb-8 xs:mb-12 md:mb-16 lg:mb-28">Sign in to PanWines</h2>
        <input
          type="email"
          name="email"
          id="mail"
          placeholder="Email Address"
          className="text-primary placeholder:text-primary placeholder:font-medium md:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px]  text-base lg:text-lg font-medium outline-none py-[2px] xs:py-2 md:py-5 px-3 my-4 border-primary border border-opacity-[60%] rounded xs:rounded-xl w-full max-sm:text-[14px]"
        />
        <input
          type="password"
          name="password"
          id="pass"
          placeholder="Password"
          className="text-primary placeholder:text-primary placeholder:font-medium md:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px]  text-base lg:text-lg font-medium outline-none py-[2px] xs:py-2 md:py-5 px-3 my-4 small:my-8 border-primary border border-opacity-[60%] rounded xs:rounded-xl w-full max-sm:text-[14px]"
        />

        <div className="flex justify-center w-full max-small:mt-6">
          <Link href="/signIn">
            <button
              type="button"
              className="text-white md:text-xl xl:text-2xl font-semibold leading-[116.667%]  bg-primary rounded-xl w-[40vw] py-3 lg:py-2 mt-4  text-center  hover:shadow-lg shadow-primary">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
