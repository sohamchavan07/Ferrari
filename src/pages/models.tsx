import React from "react";
import { Button } from "../components/ui/button";
// inline ArrowRight icon to avoid missing module import
const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);
// using placeholder images to avoid missing local assets
// If you later add real images to `src/assets/`, replace these URLs with imports.

const Models = () => (
  <section id="models" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(9_100%_50%_/_0.08),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Range</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">Ferrari Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the pinnacle of automotive engineering and Italian design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "SF90 Stradale",
                description: "Plug-in hybrid supercar with 1000 CV",
                image: "https://via.placeholder.com/1200x900?text=SF90+Stradale",
                category: "Supercars"
              },
              {
                name: "296 GTB",
                description: "V6 hybrid with unprecedented versatility",
                image: "https://via.placeholder.com/1200x900?text=296+GTB",
                category: "Sports Cars"
              },
              {
                name: "Roma",
                description: "Contemporary elegance meets timeless style",
                image: "https://via.placeholder.com/1200x900?text=Roma",
                category: "GT"
              },
              {
                name: "Purosangue",
                description: "Ferrari's first four-door, four-seater",
                image: "https://via.placeholder.com/1200x900?text=Purosangue",
                category: "Crossover"
              },
              {
                name: "812 Competizione",
                description: "Naturally aspirated V12 masterpiece",
                image: "https://via.placeholder.com/1200x900?text=812+Competizione",
                category: "Supercars"
              },
              {
                name: "Daytona SP3",
                description: "Limited edition Icona series",
                image: "https://via.placeholder.com/1200x900?text=Daytona+SP3",
                category: "Icona"
              }
            ].map((model, index) => (
              <div 
                key={model.name}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(9_100%_50%_/_0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                      {model.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {model.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
                  >
                    Discover More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
  </section>
);

export default Models;