import React from "react";

export const Logo = ({textSize}) => {
  return (
    <div className="flex flex-col gap-1 text-white hover:scale-125 transition duration-150 ease-in-out">
      <span className={`${textSize} w-3/5 text-white`}>Seba</span>
      <span className={`${textSize} rotate-3 px-1 bg-cyan-300`}>Monsalve</span>
    </div>
  );
};
