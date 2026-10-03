import Navbar from "./sections/Hero/components/Navbar";
import HeroSection from "./sections/Hero/HeroSection";
import ProfileSection from "./sections/Profile/ProfileSection";
import ExperienceSection from "./sections/Experience/ExperienceSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ContactSection from "./sections/Contact/ContactSection";
import FooterSection from "./sections/Footer/FooterSection";

export default function HomePage() {
  return (
    <main className="bg-haze text-white">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
