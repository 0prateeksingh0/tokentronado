import Header from "./components/Header";
import Footer from "./components/Footer";
import TronadoFAQ from "./components/TronadoFAQ";
import TronadoTokenomics from "./components/TronadoTokenomics";
import Roadmap from "./components/Roadmap";
import TronadoTokenInfo from "./components/TronadoTokenInfo";
import AboutTronado from "./components/AboutTronado";
import WhitepaperSection from "./components/Whitepaper";
import WhyChooseTronado from "./components/WhyChoose";
import PartnerSection from "./components/Partners";
import IcoAboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ScrollToTop from "./components/ScrollToTop";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <PartnerSection/>
      <AboutTronado/>
      <TronadoTokenInfo/>
      <IcoAboutSection />
      <WhyChooseTronado/>
      <TronadoTokenomics/>
      <Roadmap/>
      <WhitepaperSection/>
      <TronadoFAQ/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}
