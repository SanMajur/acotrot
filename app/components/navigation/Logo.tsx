import Image from "next/image";
import React from "react";
import logoImg from "/public/assets/images/logo.png";
import Link from "next/link";

type Props = {
  handleMenuClose?: any;
};
const Logo = ({ handleMenuClose }: Props) => {
  return (
    <Link href="/" className="block w-20">
      <Image
        src={logoImg}
        alt="logo"
        width={500}
        height={500}
        className="w-20 h-20"
        onClick={handleMenuClose}
      />
    </Link>
  );
};

export default Logo;
