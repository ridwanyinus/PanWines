import Image from "next/image";
import Login from "public/assets/Login.png";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex bg-white w-full overflow-hidden max-small:flex-col max-small:mb-4">
      <div className="flex sm:flex-1 justify-start relative items-start h-full small:max-w-[50vw]">
        <Image src={Login} quality={100} placeholder="blur" alt="wine" className="sm:object-fill   h-screen    max-small:w-screen  max-small:h-[60vh]" />
        <p className="text-white absolute top-11 left-4 md:left-12 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[125%] font-bold">PanWines</p>
      </div>

      <div className="flex-1 max-small:pt-12 pt-6 px-4 md:px-6 lg:px-12 max-small:flex flex-col justify-center items-center max-small:mb-4 small:w-[50vw]">
        <h2 className="text-primary font-bold leading-normal max-md:text-center text-xl sm:text-2xl md:text-3xl mb-4 xs:mb-12 md:mb-16 xl:mb-28 ">Sign in to PanWines</h2>
        <input
          type="email"
          name="email"
          id="mail"
          placeholder="Email Address"
          className="text-primary placeholder:text-primary placeholder:font-medium md:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px] text-base lg:text-lg font-medium outline-none py-[2px] xs:py-2 md:py-3 lg:py-5 px-3 my-4 border-primary border border-opacity-[60%] rounded lg:rounded-xl w-full max-sm:text-[14px] max-small:w-[80vw]"
        />
        <input
          type="password"
          name="password"
          id="pass"
          placeholder="Password"
          className="text-primary placeholder:text-primary placeholder:font-medium md:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px]  text-base lg:text-lg font-medium outline-none py-[2px] xs:py-2 md:py-3 lg:py-5 px-3 my-2 lg:my-8 border-primary border border-opacity-[60%] rounded lg:rounded-xl w-full max-sm:text-[14px] max-small:w-[80vw]"
        />

        <div className="flex justify-center w-full max-small:mt-4">
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
