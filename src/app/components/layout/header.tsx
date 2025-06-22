"use client"
import { Button } from "@/components/ui/button";
import { Blocks, Code2, Github } from "lucide-react";
import { NAV_ITEMS } from "@/app/lib/constants";
import { useCallback } from "react";
import Lenis from "@studio-freight/lenis";

export function Header() {
  const getLenis = () => (window as typeof window & { lenis?: Lenis }).lenis;

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(target, {
            offset: -90,
            duration: 1.2,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    []
  );

  return (
    <header className="sticky z-50 top-0 px-2 pt-5">
      <div className="z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between backdrop-blur-xs bg-white/1 border border-white/10 rounded-2xl shadow-xl">
        {/* Left */}
        <div className="flex items-center space-x-2 z-10 cursor-pointer"
          onClick={() => {
            const lenis = getLenis();
            if (lenis) {
              lenis.scrollTo(0, {
                offset: 0,
                duration: 1.2,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
              });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Code2 className="h-6 w-6 text-white" />
          <span className="text-lg sm:text-xl font-semibold text-white"

          >
            BoilerKit
          </span>
        </div>

        {/* Center*/}
        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>


        {/* Right */}
        <div className="flex items-center space-x-2 sm:space-x-4 z-10">
          <Button
            variant="ghost"
            className="hidden sm:flex bg-white/1 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 transition-all duration-200"
            asChild
          >
            <a
              href="https://github.com/megh-bari/boilerkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 " />
              GitHub
            </a>
          </Button>

          <Button
            className="bg-zinc-950/100 hover:bg-zinc-950/10 text-white border border-white/20 transition-all duration-200 backdrop-blur-sm text-sm px-3 py-2 sm:px-4"
            asChild
          >
            <a href="vscode:extension/megh.BoilerKit">
              <Blocks className="h-4 w-4 " />

              <span className=" sm:inline">Install Extension</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
