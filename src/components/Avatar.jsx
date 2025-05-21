import React, { useMemo } from "react";
import { bgColors } from "../static-data";

const Avatar = ({ name }) => {
  const randomBg = useMemo(() => {
    const index = Math.floor(Math.random() * bgColors.length);
    return bgColors[index];
  }, []);

  return (
    <span
      className={`rounded-full text-white font-semibold text-xl overflow-hidden min-w-[30px] min-h-[30px] ${randomBg} flex items-center justify-center`}
    >
      {name?.charAt(0).toUpperCase()}
    </span>
  );
};

export default Avatar;
