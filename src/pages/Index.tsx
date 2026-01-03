import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import Features from "@/components/Features";
import SpeedSection from "@/components/SpeedSection";
import VideoTypes from "@/components/VideoTypes";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Features />
      <SpeedSection />
      <VideoTypes />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
