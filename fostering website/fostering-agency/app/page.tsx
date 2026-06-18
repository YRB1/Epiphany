import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import TrustBar from "./components/TrustBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyFosterSection from "./components/WhyFosterSection";
import BookletSection from "./components/BookletSection";
import JourneySection from "./components/JourneySection";
import StatsSection from "./components/StatsSection";
import VideoSection from "./components/VideoSection";
import MidPageCTA from "./components/MidPageCTA";
import TestimonialsSection from "./components/TestimonialsSection";
import PaymentsSection from "./components/PaymentsSection";
import ResourcesSection from "./components/ResourcesSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <WhyFosterSection />
        <BookletSection />
        <JourneySection />
        <StatsSection />
        <VideoSection />
        <MidPageCTA />
        <TestimonialsSection />
        <PaymentsSection />
        <ResourcesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
