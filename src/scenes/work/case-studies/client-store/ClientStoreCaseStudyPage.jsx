import PageNavbar from "../../components/PageNavbar";
import CaseStudyHero from "./sections/CaseStudyHero";
import ProductContextSection from "./sections/ProductContextSection";
import ProductPracticeSection from "./sections/ProductPracticeSection";
import ChallengeSection from "./sections/ChallengeSection";
import RoleSection from "./sections/RoleSection";
import EngineeringSection from "./sections/EngineeringSection";
import OutcomeSection from "./sections/OutcomeSection";
import TakeawaysSection from "./sections/TakeawaysSection";

export default function ClientStoreCaseStudyPage() {
  return (
    <main className="bg-background text-primary">
      <PageNavbar />
      <CaseStudyHero />
      <ProductContextSection />
      <ProductPracticeSection />
      <ChallengeSection />
      <RoleSection />
      <EngineeringSection />
      <OutcomeSection />
      <TakeawaysSection />
    </main>
  );
}
