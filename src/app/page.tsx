import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { BackgroundBlobs2 } from "@/components/BackgroundBlobs2";
import { BackgroundBlobs3 } from "@/components/Backgroundblobs3";


export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-visible">
      <Header />

      <section id="home" className="scroll-mt-24">
        
        <HeroSection />
      </section>

      <section id="projects" className="relative">
        <ProjectsSection />
        <BackgroundBlobs />
      </section>

{/* 
      <div className="relative">
        <BackgroundBlobs2 />
      </div>
 */}

      <section id="tape" className="">
        <TapeSection />
      </section>

    {/*   <section id="testimonials">
        <TestimonialsSection />
      </section>
 */}
      <section id="about" className="relative ">
      <BackgroundBlobs3 />
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}