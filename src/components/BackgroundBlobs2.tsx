'use client';

export const BackgroundBlobs2 = () => {
  return (
    <>
      {/* Pink Blob – Top Right shifted more inward and upward */}
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-red-900 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />

      {/* Orange Blob – Bottom Left moved closer to center and down */}
      <div className="absolute bottom-10 left-20 w-[320px] h-[320px] bg-orange-300 opacity-50 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Amber Blob – Mid Right shifted up a bit and pushed out more */}
      <div className="absolute bottom-1/4 right-10 w-[280px] h-[280px] bg-amber-400 opacity-50 blur-3xl rounded-full -z-10 pointer-events-none" />
    </>
  );
};