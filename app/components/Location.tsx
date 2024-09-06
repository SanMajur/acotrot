import React from "react";
type Props = {
  location: any;
  tel: any;
};

const Location = ({ location, tel }: Props) => {
  return (
    <div className="flex flex-col gap-1 px-8 lg:px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6  text-cyan-700"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>

      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] text-white font-semibold">{location}</h3>
        <p className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          {tel}
        </p>
      </div>
    </div>
  );
};

export default Location;
