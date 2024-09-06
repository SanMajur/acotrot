import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  serviceName: any;
  serviceDescription: any;
  serviceLink: any;
  serviceLinkText: any;
  serviceImage: any;
};

const Services = ({
  serviceDescription,
  serviceLink,
  serviceName,
  serviceLinkText,
  serviceImage,
}: Props) => {
  return (
    <Link href={serviceLink} className="flex flex-col group">
      <div className="bg-white/10 rounded-full w-24 h-24 flex justify-center items-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-700">
        <Image
          src={serviceImage}
          alt="services icon"
          width={500}
          height={500}
          className="h-16 w-16 fill-white"
        />
      </div>
      <div className="flex flex-col my-4">
        <h1 className="text-xl text-white font-bold my-4">{serviceName}</h1>
        <p className="text-white">{serviceDescription}</p>
      </div>
      <button className="w-[70%] bg-gradient-to-r from-cyan-500 to-cyan-700 text-white  flex justify-between items-center hover:bg-gradient-to-r hover:from-transparent hover:to-transparent rounded-md py-2 px-4 ring-2 ring-cyan-400 mt-4 mb-16">
        {serviceLinkText} <FaArrowRight />
      </button>
    </Link>
  );
};

export default Services;
