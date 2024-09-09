import React from "react";
import QuoteBtn from "./navigation/QuoteBtn";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative z-10">
      <div className="absolute bg-grid-bg bg-no-repeat bg-cover bg-center left-0 right-0 top-0 h-screen"></div>
      <div className="absolute top-0 left-0 right-0 h-screen bg-black/80"></div>
      <div className="relative flex justify-center align-center flex-col px-8 mt-14">
        <div className=" lg:w-[720px] mx-auto mt-8 md:mt-20 xl:mt-32">
          <h1 className="text-[32px] text-center mt-14 text-white  font-bold">
            Welcome to Acotrot General Trading Co.Ltd &quot;Going
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              {" "}
              Forward{" "}
            </span>
            with full
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              {" "}
              Momentum
            </span>
            &quot;
          </h1>
        </div>
        <div className=" max-w-[554px] mx-auto py-8">
          <p className="text-white text-center">
            With over half a decade of experience in general supplies,
            construction, logistics, and procurement, we are committed to
            helping you achieve your goals.
          </p>
        </div>
        <div className="text-center pt-10">
          <QuoteBtn href={"#"} linkText={"explore our work"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
