import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Login from "public/assets/Login.png";
import password from "public/assets/Password.svg";

const page = () => {
  return (
    <section className="flex bg-white  w-full overflow-hidden max-small:flex-col max-small:mb-6 ">
      <div className="flex sm:flex-1 justify-start relative items-start h-full w-full">
        <Image src={Login} quality={100} placeholder="blur" alt="wine" className="sm:object-fill   max-h-full max-md:h-screen  max-small:w-[100vw] max-small:h-[70vh]" />
        <p className="text-white absolute top-11 left-4 md:left-12 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[125%] font-bold">PanWines</p>
      </div>

      <div className="flex-1  pt-6 px-4 md:px-6 lg:px-12 small:w-[50vw] flex flex-col max-small:justify-center max-small:items-center">
        <h2 className="text-primary font-bold leading-normal max-md:text-center  text-xl small:text-xl sm:text-2xl md:text-3xl mb-4 xl:mb-18">Create an account</h2>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Full Name"
          className="text-primary placeholder:text-primary placeholder:font-medium lg:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px]  text-base lg:text-lg font-medium outline-none py-[2px] sm:py-1 md:py-2  xl:py-5 px-3 md:px-4 my-2 border-primary border border-opacity-[60%] rounded md:rounded-xl  w-full max-sm:text-[14px] max-small:w-[80vw]"
        />
        <input
          type="number"
          name="name"
          id="phone number"
          placeholder="Phone Number"
          className="text-primary placeholder:text-primary placeholder:font-medium lg:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px]  text-base lg:text-lg font-medium outline-none py-[2px] sm:py-1 md:py-2 xl:py-5 px-3 md:px-4 my-2 border-primary border border-opacity-[60%] rounded md:rounded-xl w-full max-sm:text-[14px] max-small:w-[80vw]"
        />
        <input
          type="email"
          name="email"
          id="mail"
          placeholder="Email Address"
          className="text-primary placeholder:text-primary placeholder:font-medium lg:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px]  text-base lg:text-lg font-medium outline-none py-[2px] sm:py-1 md:py-2  xl:py-5 px-3 md:px-4 my-2 border-primary border border-opacity-[60%] rounded md:rounded-xl w-full max-sm:text-[14px] max-small:w-[80vw]"
        />

        <div className="flex py-[2px] sm:py-1 md:py-2  xl:py-5 px-3 mt-1 mb-2 border-primary border border-opacity-[60%] rounded md:rounded-xl w-full outline-none  justify-between max-small:w-[80vw]">
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Password"
            className="text-primary placeholder:text-primary placeholder:font-medium lg:placeholder:text-[20px] xs:placeholder:leading-[116.667%] max-small:placeholder:text-[13px] text-base lg:text-lg font-medium  max-sm:text-[14px] w-fit"
          />
          <Image src={password} alt="password-invisible max-sm:hidden" className="w-[10px] small:w-[12px] xs:hidden sm:flex" />
        </div>

        <p className="text-end text-primary font-medium leading-normal text-xs md:text-[13px] lg:text-xl max-small:w-[80vw]">Forgot Password?</p>

        <div className="flex justify-center w-full max-small:mt-8  sm:mt-4 mt-6 mb-1 xl:mb-8 widescreen:mb-16">
          <Link href="/createAcct">
            <button
              type="button"
              className="text-white max-small:text-[13px] md:text-lg xl:text-2xl font-semibold leading-[116.667%]  bg-primary rounded small:rounded-xl  w-[30vw] md:w-[30vw] lg:w-[40vw] py-3 lg:py-2 xl:mt-4 text-center  hover:shadow-lg shadow-primary max-small:px-1 max-small:w-[50vw]">
              Create Account
            </button>
          </Link>
        </div>

        <p className="text-center text-black font-semibold leading-normal max-small:text-xs xl:text-xl">OR</p>

        <div className="flex justify-center items-center w-full max-small:mt-1">
          <Link href="/signup">
            <button
              type="button"
              className="text-primary max-small:text-[13px] gmail md:text-lg xl:text-2xl font-normal border-primary border leading-[116.667%]  bg-white  sm:rounded-xl max-small:px-1  w-[40vw] py-3 lg:py-2 xl:mt-4 small:mt-1  text-center  hover:shadow-lg shadow-primary flex justify-center items-center max-small:w-[60vw]">
              <span className="pr-1 ">
                <FaGoogle />
              </span>
              Sign up with Google
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
