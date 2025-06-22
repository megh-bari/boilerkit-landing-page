import { Button } from "@/components/ui/button";
import { Download, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative z-30 py-20 px-2 text-center flex items-center -mb-35 lg:-mb-35">
      <div className="container mx-auto max-w-6xl px-2 ">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-black/40 border-white/20 text-white hover:bg-black/50 font-semibold cursor-pointer">
            {/* Boil It Up! <Zap className="h-4 w-4 text-orange-500" /> */}
            <span className="font-medium">Built with laziness</span>
            <Zap className="h-4 w-4 text-orange-500" />
            <span className="inline-flex items-center">Boil It Up!</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="mb-6 text-lg text-gray-200">
          <span className="font-mono text-white">
            Because why type it again?
          </span>
        </p>

        {/* Main Headline */}
        <h1 className="mb-8 text-[30px] sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight text-center">
          <span className="block bg-gradient-to-r from-neutral-50 via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-300">
            Insert Boilerplate Code
          </span>
          <span className="block bg-gradient-to-r from-neutral-100 via-slate-400 to-neutral-400 bg-clip-text text-transparent transition-all duration-300">
            in One Trigger
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 text-[16px] md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          BoilerKit helps you start faster by inserting boilerplate code for 30+
          languages & frameworks with simple triggers like{" "}
          <span className="font-mono text-white">cppboiler</span>,{" "}
          <span className="font-mono text-white">pyboiler</span>,{" "}
          <span className="font-mono text-white">reactjsboiler</span>, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 px-10">
          <Button
            size="lg"
            className="bg-zinc-950/100 backdrop-blur-md border border-white/10 text-white hover:bg-zinc-950/10 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
            asChild
          >
            <a href="vscode:extension/megh.BoilerKit">
              <Download className="h-5 w-5 mr-2" />
              Install On VS Code
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/1 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
            asChild
          >
            <a
              href="https://marketplace.visualstudio.com/items?itemName=megh.BoilerKit"
              target="_blank"
            >
              Explore BoilerKit
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
