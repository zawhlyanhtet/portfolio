import Navbar from "./sections/Hero/components/Navbar";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ContactSection from "./sections/Contact/ContactSection";
import FooterSection from "./sections/Footer/FooterSection";

export default function HomePage() {
  return (
    <main className="bg-haze text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
