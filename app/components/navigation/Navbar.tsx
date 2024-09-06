"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import MobileLinks from "./MobileLinks";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import QuoteBtn from "./QuoteBtn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClose = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="bg-[#14141d] shadow-sm  fixed top-0 left-0 right-0 z-20">
      <nav className="flex justify-between items-center px-4 py-2 max-w-[1184px] mx-auto text-white">
        <div className="">
          <Logo />
        </div>
        <div className="lg:hidden z-40">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
        <div
          className={`absolute  top-0 w-full  bg-black/20 transition-all ease-in-out duration-300  ${
            isMenuOpen ? "left-0" : " -left-full"
          }`}
        >
          <nav className="bg-[#14141d] w-full h-screen shadow-lg  lg:hidden flex flex-col gap-8 transition-all ease-in-out duration-300 ">
            <div className="px-4 py-2">
              <Logo handleMenuClose={handleMenuClose} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <MobileLinks href={"/"} linkText={"home"} />
                <MobileLinks
                  href={"#"}
                  linkText={"about"}
                  icon={<FaChevronRight />}
                />
                <MobileLinks href={"#"} linkText={"services"} />
                <MobileLinks
                  href={"#"}
                  linkText={"products"}
                  icon={<FaChevronRight />}
                />
                <MobileLinks href={"#"} linkText={"contact"} />
              </div>
              <div className="mt-24 ml-4 text-center">
                <QuoteBtn href={"#"} linkText={"Request a Quotation"} />
              </div>
            </div>
          </nav>
        </div>
        <div className="hidden lg:flex justify-between gap-4 items-center">
          <MobileLinks href={"/"} linkText={"home"} />
          <MobileLinks
            href={"#"}
            linkText={"about us"}
            icon={<FaChevronDown />}
          />
          <MobileLinks href={"#"} linkText={"services"} />
          <MobileLinks
            href={"#"}
            linkText={"products"}
            icon={<FaChevronDown />}
          />
          <MobileLinks href={"#"} linkText={"contact"} />
          <div className="hidden lg:block">
            <QuoteBtn href={"#"} linkText={"Request a Quotation"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
