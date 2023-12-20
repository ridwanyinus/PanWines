"use client";
import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <nav className="bg-primary px-6 py-4 lg:px-12 lg:py-6 flex items-center  justify-between ">
      <Link href="/" className="text-white font-bold  text-2xl lg:text-3xl  leading-[40px] ">
        PanWines
      </Link>
      <div className="flex gap-6 xl:gap-8 max-lg:hidden">
        <Link href="/" className="text-xl text-white opacity-95  font-medium leading-[116.667%] hover:border-b border-white hover:opacity-100">
          Home
        </Link>
        <Link href="/products" className="text-xl text-white opacity-95  font-medium leading-[116.667%] hover:border-b border-white hover:opacity-100">
          Product
        </Link>
        <Link href="/shoppingCart" className="text-xl text-white opacity-95  font-medium leading-[116.667%]  hover:opacity-100 flex">
          Shopping Cart
          <span className="pl-[2px]">
            <AiOutlineShoppingCart width={32} height={28} />
          </span>
        </Link>
      </div>

      <div className="flex xl:gap-4 gap-4 max-lg:hidden">
        <Link href="/login">
          <button type="button" className="text-primary bg-white text-xl font-semibold leading-[116.667%] rounded-lg py-2 px-5 hover:bg-transparent hover:text-white">
            Login
          </button>
        </Link>

        <Link href="/signUp">
          <button type="button" className="text-primary bg-white text-xl font-semibold leading-[116.667%] rounded-lg py-2 px-4">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="flex  lg:hidden  relative justify-between items-center h-[100%]">
        {toggleMenu ? (
          <IoClose size={27} color="#fff" onClick={() => settoggleMenu(false)} />
        ) : (
          <FiAlignRight
            size={27}
            color="#fff"
            onClick={() => {
              console.log("Hello");
            }}
            // onClick={() => settoggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="flex gap-6 xl:gap-8 lg:hidden">
            <Link href="/" className="text-xl text-primary opacity-95  font-medium leading-[116.667%] hover:border-b border-white hover:opacity-100">
              Home
            </Link>
            <Link href="/products" className="text-xl text-white opacity-95  font-medium leading-[116.667%] hover:border-b border-white hover:opacity-100">
              Product
            </Link>
            <Link href="/shoppingCart" className="text-xl text-white opacity-95  font-medium leading-[116.667%]  hover:opacity-100 flex">
              Shopping Cart
              <span className="pl-[2px]">
                <AiOutlineShoppingCart width={32} height={28} />
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
