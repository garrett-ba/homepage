import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <HowItWorks />
      <Industries />
      <CTA />
      <Footer />
    </div>
  );
}
