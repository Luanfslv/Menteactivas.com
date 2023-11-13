import React from "react";

interface ButtonLink2 {
  children: React.ReactNode;
}

const ButtonLink2 = ({ children }: any) => {
  // Gere um ID exclusivo para cada checkbox
  const uniqueId = `checkbox-${Math.random().toString(36)}`;

  return (
    <div className="text-center w-full flex md:w-auto px-4 lg:px-[11.11%] sm:mx-0 sm:max-w-[355px] md:max-w-[800px] py-[16px] items-center text-[14px] font-bold rounded-[5px] bg-white border md:border-[1.5px] border-[#6700a7] text-[#6700a7]  transform transition-transform duration-200">
      <input type="checkbox" id={uniqueId} className="input-radio input-checkbox" required />
      <label htmlFor={uniqueId} className="label-radio sora-semibold w-full h-full">
        {children}
      </label>
    </div>
  );
}

export default ButtonLink2;


