import React from "react";
import MobileLinks from "./MobileLinks";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Location from "../Location";

const Footer = () => {
  return (
    <footer className="bg-[rgb(20,20,29)]">
      <div className="py-4">
        <div className="px-8">
          <div className="flex flex-col-reverse lg:flex-row md:max-w-[700px] lg-max-w-[1184px] mx-auto lg:justify-between">
            <div className="flex flex-col text-white gap-8">
              <div className="flex flex-col ">
                <MobileLinks href={""} linkText={"About us"} />
                <MobileLinks href={""} linkText={"About"} />
                <MobileLinks href={""} linkText={"About"} />
                <MobileLinks href={""} linkText={"About"} />
              </div>
              <div className="flex gap-4 px-8 lg:px-0">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTiktok />
              </div>
            </div>
            <div className="flex  gap-4 mb-8 md:mb-0 flex-wrap ">
              <Location location="Juba Town" tel="+211 922 598 581" />
              <Location location="Aweil Town" tel="+211 911 025 045" />
              <Location location="Wau Town" tel="+211 910 866 787" />
            </div>
          </div>
          <p className="text-gray-600 text-sm lg:text-xl text-center pt-16">
            &copy; 2024 Acotrot General Trading
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
