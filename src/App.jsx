import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Hospitality from "./components/Hospitality.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import WhyChoose from "./components/Why.jsx";
import Book from "./components/Book.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <WhyChoose />
        <PortfolioSection />
        <Testimonials />
        <Hospitality />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
