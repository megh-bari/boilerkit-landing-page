import { Badge } from "@/components/ui/badge";
import { POPULAR_TRIGGERS } from "@/app/lib/constants";

export function PopularTriggers() {
  return (
    <section className="py-20 px-4 backdrop-blur-md bg-zinc-950/10 border-b border-white/1 rounded shadow-xl">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Popular Triggers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4">
          {POPULAR_TRIGGERS.map((trigger) => (
            <Badge
              key={trigger}
              variant="secondary"
              className="justify-center w-full max-w-5xl rounded-3xl py-3 px-4 font-mono text-sm bg-zinc-950/100 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {trigger}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
