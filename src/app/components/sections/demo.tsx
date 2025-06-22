"use client";

import { useState, useEffect } from "react";
import { Code, RotateCcw, Search } from "lucide-react";
import { DEMO_CODE } from "@/app/lib/constants";

export function Demo() {
  const [demoText, setDemoText] = useState("");
  const [showExpansion, setShowExpansion] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const animateDemo = () => {
      setDemoText("");
      setShowExpansion(false);

      // Type the trigger
      for (let i = 0; i <= DEMO_CODE.trigger.length; i++) {
        setTimeout(() => {
          setDemoText(DEMO_CODE.trigger.slice(0, i));
        }, i * 120);
      }

      // Show expansion after typing
      setTimeout(() => {
        setShowExpansion(true);
      }, DEMO_CODE.trigger.length * 120 + 800);

      // Restart animation
      timeoutId = setTimeout(animateDemo, 7000);
    };

    animateDemo();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="demo" className="py-10 px-4 mb-10">
      <div className="container mx-auto max-w-7xl backdrop-blur-md bg-zinc-950/10 border-b border-white/1 rounded-2xl shadow-xl">
        {/* Browser Mockup */}
        <div className=" rounded-t-lg border border-white/10  b">
          {/* Browser Header */}
          <div className="flex items-center justify-center md:justify-between px-4 py-3 rounded-t-lg border-b border-white/10">
            {/* 3 Dots: Hidden on small screens, visible on md+ */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Centered Bar */}
            <div className="w-full max-w-sm mx-auto px-3 py-2 rounded-2xl bg-zinc-900 flex items-center justify-between border border-white/10 shadow-xl">
              <Search className="h-5 w-5 text-gray-300" />
              <span className="mx-3 flex-1 text-center font-mono text-sm text-white truncate select-none">
                https://boilerkit.megh.me
              </span>
              <RotateCcw className="h-5 w-5 text-gray-300" />
            </div>

            {/* Spacer: Hidden on small screens, visible on md+ */}
            <div className="hidden md:block w-16"></div>
          </div>

          {/* VS Code Interface */}
          <div className="backdrop-blur-md bg-zinc-950/50  p-8 rounded-b-lg">
            <div className="bg-zinc-950/50 rounded-lg border border-white/10  overflow-hidden">
              {/* VS Code Header */}
              <div className="bg-zinc-950/50 px-4 py-2 border-b border-white/10  flex items-center">
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-300">main.cpp</span>
                </div>
              </div>

              {/* Code Editor */}
              <div className="p-6 font-mono min-h-70">
                <div className="flex items-center mb-6 text-lg">
                  {/* <span className="text-gray-500 mr-3">{">"}</span> */}
                  <span className="text-green-400">{demoText}</span>
                  <span className="animate-pulse text-green-400">|</span>
                </div>
                {showExpansion && (
                  <div className="text-gray-300 animate-in slide-in-from-top-2 duration-700">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                      {DEMO_CODE.expansion}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
