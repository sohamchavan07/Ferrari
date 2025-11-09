import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, AlertCircle, Zap, BarChart3, GitBranch, Cloud, Clock, TrendingUp, Gauge, Play, Linkedin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { X as XIcon } from "lucide-react";
import heroImage from "@/assets/ferrari-f1-hero.jpg";
import ferrariSF90 from "@/assets/ferrari-sf90.jpg";
import ferrari296GTB from "@/assets/ferrari-296gtb.jpg";
import ferrariRoma from "@/assets/ferrari-roma.jpg";
import ferrariPurosangue from "@/assets/ferrari-purosangue.jpg";
import ferrari812 from "@/assets/ferrari-812.jpg";
import ferrariDaytona from "@/assets/ferrari-daytona.jpg";

const Index = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        const rect = resultsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setCountersVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Ferrari F1 Racing" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ferrari Case Study</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Racing Ahead <br />
            <span className="text-primary">with DevOps</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            How Ferrari accelerated innovation using Azure DevOps and real-time analytics
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary/60" />
        </div>
      </section>

      {/* Ferrari Models Section */}
      <section className="py-24 px-4 relative">
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
                image: ferrariSF90,
                category: "Supercars"
              },
              {
                name: "296 GTB",
                description: "V6 hybrid with unprecedented versatility",
                image: ferrari296GTB,
                category: "Sports Cars"
              },
              {
                name: "Roma",
                description: "Contemporary elegance meets timeless style",
                image: ferrariRoma,
                category: "GT"
              },
              {
                name: "Purosangue",
                description: "Ferrari's first four-door, four-seater",
                image: ferrariPurosangue,
                category: "Crossover"
              },
              {
                name: "812 Competizione",
                description: "Naturally aspirated V12 masterpiece",
                image: ferrari812,
                category: "Supercars"
              },
              {
                name: "Daytona SP3",
                description: "Limited edition Icona series",
                image: ferrariDaytona,
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

      {/* Challenge Section */}
      <section id="challenge" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(9_100%_50%_/_0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">The Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Before embracing DevOps, Ferrari faced significant engineering bottlenecks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Slow Releases",
                description: "Quarterly software updates couldn't keep pace with racing demands"
              },
              {
                icon: AlertCircle,
                title: "Manual Deployments",
                description: "Error-prone manual processes slowed critical updates"
              },
              {
                icon: BarChart3,
                title: "Delayed Analytics",
                description: "Race telemetry data took hours to process, not milliseconds"
              },
              {
                icon: GitBranch,
                title: "Siloed Teams",
                description: "Engineering and operations worked in isolation, creating friction"
              }
            ].map((challenge, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <challenge.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">The Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Azure DevOps transformed Ferrari's engineering workflow into a precision machine
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Azure DevOps Platform</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrated development environment with Azure Boards for sprint planning, 
                    Azure Repos for version control, and Azure Pipelines for automated builds
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">CI/CD Pipelines</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated testing and deployment pipelines that push code from development 
                    to production in minutes, with zero downtime deployments
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-in-right">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">AI-Driven Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time telemetry processing using Azure AI and machine learning 
                    to make split-second race strategy decisions
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Container Orchestration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kubernetes-based microservices architecture enabling scalable, 
                    resilient applications that handle race-day traffic spikes
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-center">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold">Azure</p>
            </div>
            <div className="text-center">
              <GitBranch className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold">DevOps</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold">Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(9_100%_50%_/_0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">The Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements across every engineering metric
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                value: "Weekly", 
                label: "Releases", 
                subtitle: "Was quarterly",
                icon: TrendingUp 
              },
              { 
                value: "+30%", 
                label: "Data Processing", 
                subtitle: "Speed increase",
                icon: Zap 
              },
              { 
                value: "-40%", 
                label: "Deployment Time", 
                subtitle: "Reduction",
                icon: Clock 
              },
              { 
                value: "Real-Time", 
                label: "Analytics", 
                subtitle: "Race insights",
                icon: Gauge 
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] ${
                  countersVisible ? 'animate-count-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">Real-World Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DevOps excellence driving innovation on track and on the road
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* F1 Side */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-10 animate-slide-in-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Play className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Formula 1 Racing</h3>
              </div>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time telemetry processing during races enables instant strategy adjustments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">AI-powered predictive analytics optimize tire strategy and pit stop timing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Continuous deployment ensures race engineers have the latest tools trackside</span>
                </li>
              </ul>
            </div>
            
            {/* Road Car Side */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-10 animate-slide-in-right">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Gauge className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Road Car Innovation</h3>
              </div>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Connected car features receive over-the-air updates without dealer visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Customer experience improvements deployed weekly based on feedback data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Race-to-road technology transfer accelerated from years to months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(9_100%_50%_/_0.08),transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="mb-12">
            <div className="text-6xl mb-8">"</div>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic">
              By embracing DevOps with Azure, Ferrari transformed its engineering from manual to intelligent automation — 
              <span className="text-primary font-semibold"> driving both racing excellence and digital innovation</span>
            </blockquote>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold mb-4">Built by Soham Chavan — Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">RR</span>
                </div>
                <span>Ruby on Rails</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">R</span>
                </div>
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">TW</span>
                </div>
                <span>TailwindCSS</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-8 h-8 text-primary" />
                <span>Azure</span>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/company/ferrari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/ferrari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/Ferrari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/Ferrari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/ferrari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            <p>© 2025 Ferrari DevOps Case Study. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
