import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { SkillSection } from "../components/SkillSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </div>
  );
}