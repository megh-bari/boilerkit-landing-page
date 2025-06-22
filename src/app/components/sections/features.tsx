import { FEATURES } from "@/app/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
    
  return (
    <section
      id="features"
      className="py-20 px-4 backdrop-blur-md bg-zinc-950/50 border-b border-white/1 rounded shadow-xl"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose BoilerKit?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <Card
              key={index}
              className="bg-zinc-950/100 backdrop-blur-md border border-white/10 text-white hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
