import Image from "next/image";
import React from "react";

type Props = {
  logoImg: any;
};

const Clients = ({ logoImg }: Props) => {
  return (
    <Image
      src={logoImg}
      width={500}
      height={500}
      alt="logo"
      className="max-w-[5rem] max-h-[5rem] rounded-full"
    />
  );
};

export default Clients;
