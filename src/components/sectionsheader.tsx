
export const SectionHeader = ({
    title,
    eyebrow,
    description,
}:{
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
         <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest  bg-gradient-to-r from-[#5C4033] to-[#F7BDAA] text-center bg-clip-text text-transparent ">
                {title}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#5C4033] text-center mt-6 ">
                {eyebrow} 
            </h2>
            <p className="text-center md:text-l lg:text-xl text-[#5C4033] mt-4 max-w-md mx-auto"> 
               {description}</p>
        </>

    );
};
