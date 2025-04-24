'use client';

export const BackgroundBlobs = () => {
  return (
    <>
      {/* Pink Blob - Top Left */}
      <div className="absolute -top-32 -right-20 w-[400px] h-[400px] bg-red-400 opacity-20 blur-3xl rounded-full -z-0 pointer-events-none" />
      <div className="absolute bottom-96 -left-0 w-[400px] h-[400px] bg-red-400 opacity-20 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Orange Blob - Bottom Right */}
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-orange-300 opacity-60 blur-3xl rounded-full -z-0 pointer-events-none" />

      <div className="absolute -bottom-1/3   right-40 w-[300px] h-[300px] bg-amber-400 opacity-60 blur-3xl rounded-full -z-10 pointer-events-none" />

    </>
  );
};