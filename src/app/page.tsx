import { Contact } from "@/components/Contact";
import { FocusAreas } from "@/components/FocusAreas";
import { Footer } from "@/components/Footer";
import { FuelGo } from "@/components/FuelGo";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { RevealObserver } from "@/components/RevealObserver";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <Services />
        <FuelGo />
        <Work />
        <Packages />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
