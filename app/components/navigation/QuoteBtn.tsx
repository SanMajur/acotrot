import Link from "next/link";
import React from "react";
type Props = {
  href?: any;
  linkText?: any;
};
const QuoteBtn = ({ href, linkText }: Props) => {
  return (
    <div className="">
      <Link
        href={href}
        className="py-3 px-6 bg-gradient-to-r hover:bg-gradient-to-r hover:from-transparent from-cyan-500 to-cyan-700 hover:to-transparent rounded-md text-white uppercase ring-2 ring-cyan-400"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default QuoteBtn;
