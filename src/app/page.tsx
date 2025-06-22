import { LenisProvider } from "./components/LenisProvider";
import Footer from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Contribute } from "./components/sections/contribute";
import { Demo } from "./components/sections/demo";
import { Features } from "./components/sections/features";
import Hero from "./components/sections/hero";
import { HowItWorks } from "./components/sections/how-it-works";
import { PopularTriggers } from "./components/sections/popular-triggers";

export default function Home() {
  return (
    <>
      <LenisProvider />    {/*  for smooth scroll */}
      <div className="min-h-screen w-full relative bg-black text-white">
        {/* Pearl Mist Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
          }}
        />

        <Header />
        <main>
          <Hero />
          <Demo />
          <Features />
          <PopularTriggers />
          <HowItWorks />
          <Contribute />
          <Footer />
        </main>
      </div>
    </>
  );
}
