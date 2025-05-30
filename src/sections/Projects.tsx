import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/sectionsheader";
import { Card } from "@/components/card";

const portfolioProjects = [
  {
    company: "Work in Progress",
    year: "2025",
    title: "Discord Steam Hybrid",
    results: [
      { title: "WebRTC" },
      { title: "Firebase DataBase" },
      { title: "Peer To Peer Connection" },
    ],
    link: "https://github.com/filipHaellgren/sync-up",
    image: "/HaellgrenPortfolio/images/Component1.png",
  },
  {
    company: "Group Project",
    year: "2024",
    title: "Points Of Intrest Badges App",
    results: [
      { title: "Ai Recognition Via Photos" },
      { title: "Made With Agile Working Methods" },
      { title: "Custom made Badges" },
    ],
    link: "https://github.com/JohanTran02/chas-challenge",
    image: "/HaellgrenPortfolio/images/Component2.png",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Some Work That I've Done"
          title="featured projects"
          description="Most Recent"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky border"
              style={{
                top: `calc(48px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-[#FDE2C8] to-[#F7BDAA] inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl text-[#F6EADB]">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-[#F6EADB] text-[#5C4033] h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-8">
                      <span>View on github</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
