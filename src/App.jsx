import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Gallery />
        <PortfolioSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
