import Home from "@/components/Spline";

export const HeroSection = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Home />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="flex flex-row lt-md:flex-col space-x-6 lt-md:space-x-0">
          <h1 className="text-[#5C4033] font-serif font-medium text-9xl lt-md:text-6xl lt-lg:text-7xl">Filip </h1>
          <div className="flex flex-col items-end gap-2">
            <h1 className="text-[#5C4033] font-serif font-medium text-9xl lt-md:text-6xl lt-lg:text-7xl"> Haellgren</h1>
            <p className="text-xl text-[#5C4033] "> (Based In Stockholm) </p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};