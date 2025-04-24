"use client";
import Wave from "@/assets/icons/wave5.svg";

export const TapeSection = () => {
  return (
<div className="relative w-full aspect-[5/1] overflow-x-hidden -z-[2000]">

  <div className="absolute inset-0 pointer-events-none -z-[2000]">
    <Wave className="w-full  object-cover" />
  </div>
</div>
  );
};
