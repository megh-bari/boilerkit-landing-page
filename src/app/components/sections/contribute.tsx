import { Button } from "@/components/ui/button";
import { Download, Github, Users } from "lucide-react";

export function Contribute() {
  return (
    <section className="py-20 px-4 backdrop-blur-md bg-zinc-950/10 border-b border-white/1 rounded shadow-xl">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full text-primary">
            <Users className="h-12 w-12   text-purple-400" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contribute New Boilerplates
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Help the community by adding new boilerplate templates. It is easy to
          contribute and make BoilerKit even better!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-10">
          <Button
            size="lg"
            className="bg-zinc-950/100  backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
            asChild
          >
            <a href="vscode:extension/megh.BoilerKit">
              <Download className="h-5 w-5 mr-2" />
              Install BoilerKit Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-zinc-950/100 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
            asChild
          >
            <a
              href="https://github.com/megh-bari/boilerkit#Contributing"
              target="_blank"
            >
              <Github className="h-5 w-5 mr-2" />
              Contribute Guide
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
