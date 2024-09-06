import Link from "next/link";
import React from "react";

type Props = {
  href: any;
  linkText: any;
  icon?: React.ReactNode;
};

const MobileLinks = ({ href, linkText, icon }: Props) => {
  return (
    <ul className="px-8 lg:px-0">
      <li className="  border-b lg:border-none border-slate-600 py-4">
        <Link
          href={href}
          className="flex justify-between  uppercase  lg:p-0 lg:gap-2 items-center text-sm "
        >
          {linkText} {icon}
        </Link>
      </li>
    </ul>
  );
};

export default MobileLinks;
