"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <nav className="bg-primary px-6 py-5 lg:px-12 lg:py-6 flex lg:items-center  justify-between ">
      <Link href="/" className="text-white font-bold  text-2xl lg:text-3xl  lg:leading-[40px] ">
        PanWines
      </Link>
      <div className="flex gap-6 xl:gap-8 max-lg:hidden w-fit h-full">
        <Link href="/" className="text-xl text-white opacity-95  font-medium leading-[116.667%] hover:border-b border-white hover:opacity-100">
          Home
        </Link>
        <Link href="/products" className="text-xl text-white opacity-95  font-medium leading-[116.667%] hover:border-b border-white hover:opacity-100">
          Product
        </Link>
        <Link href="/products/shoppingCart" className="text-xl text-white opacity-95  font-medium leading-[116.667%]  hover:bg-slate-50 hover:px-2 hover:rounded hover:bg-opacity-5 w-full flex">
          Shopping Cart
          <span className="pl-[2px]">
            <AiOutlineShoppingCart width={32} height={28} />
          </span>
        </Link>
      </div>

      <div className="flex xl:gap-4 gap-4 max-lg:hidden">
        <Link href="/login">
          <button type="button" className="text-primary bg-white text-xl font-semibold leading-[116.667%] rounded-lg py-2 px-5 active:bg-transparent active:border active:text-white">
            Login
          </button>
        </Link>

        <Link href="/signUp">
          <button type="button" className="text-primary bg-white text-xl font-semibold leading-[116.667%] rounded-lg py-2 px-4 active:bg-transparent active:border active:text-white">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="flex flex-col lg:hidden gap-6 h-[100%]">
        <div className=" w-full h-full flex items-end justify-end">
          {toggleMenu ? (
            <div className="border border-slate-50 border-opacity-50 rounded px-1">
              <IoClose size={28} color="#fff" onClick={() => settoggleMenu(false)} />
            </div>
          ) : (
            <div className="border border-slate-50 border-opacity-50 rounded p-1 px-[6px]">
              <FiAlignRight size={27} color="#fff" onClick={() => settoggleMenu(true)} />
            </div>
          )}
        </div>

        {toggleMenu && (
          <div className="flex flex-col justify-end bg-primary rounded  w-full gap-2 items-end scale-up-ver-top">
            <Link href="/products" className="text-xs small:text-lg  text-white opacity-95  font-normal leading-[116.667%] hover:border-b border-white hover:opacity-100">
              Home
            </Link>
            <Link href="/products" className="text-xs small:text-lg  text-white opacity-95  font-normal leading-[116.667%] hover:border-b border-white hover:opacity-100">
              Product
            </Link>
            <Link
              href="/shoppingCart"
              className="text-xs small:text-lg  text-white opacity-95  font-normal leading-[116.667%] hover:border-b border-white hover:opacity-100 flex justify-center items-center">
              Shopping Cart
              <span className="pl-[2px]">
                <AiOutlineShoppingCart width={32} height={28} />
              </span>
            </Link>

            <div className="flex flex-col max-sm:mt-1 gap-3 justify-end items-end">
              <Link href="/login">
                <button
                  type="button"
                  className="text-primary bg-white text-base small:text-lg font-medium leading-[116.667%] rounded small:rounded-lg py-1 px-5 active:bg-transparent active:border active:text-white">
                  Login
                </button>
              </Link>

              <Link href="/signUp">
                <button
                  type="button"
                  className="text-primary bg-white text-base small:text-lg font-medium leading-[116.667%] rounded small:rounded-lg py-1 px-5 active:bg-transparent active:border active:text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
