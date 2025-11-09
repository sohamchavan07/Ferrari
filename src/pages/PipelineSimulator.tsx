import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
  GitBranch, 
  FileCode, 
  Wrench, 
  CheckCircle, 
  Package, 
  Rocket,
  Play,
  RotateCcw,
  Clock,
  AlertCircle
} from "lucide-react";

const PipelineSimulator = () => {
  const [activeStage, setActiveStage] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const stages = [
    {
      id: 0,
      name: "Source Control",
      icon: GitBranch,
      description: "Developer pushes code to Azure Repos",
      duration: "1s",
      details: [
        "Git commit triggers webhook",
        "Branch protection rules enforced",
        "Automated code review initiated"
      ]
    },
    {
      id: 1,
      name: "Build",
      icon: FileCode,
      description: "Compile and build application",
      duration: "3min",
      details: [
        "Dependencies restored",
        "TypeScript/C++ compilation",
        "Asset bundling and optimization"
      ]
    },
    {
      id: 2,
      name: "Test",
      icon: Wrench,
      description: "Run automated test suites",
      duration: "5min",
      details: [
        "Unit tests (98% coverage)",
        "Integration tests",
        "Performance benchmarks"
      ]
    },
    {
      id: 3,
      name: "Code Quality",
      icon: CheckCircle,
      description: "Static analysis and security scan",
      duration: "2min",
      details: [
        "SonarQube analysis",
        "Security vulnerability scan",
        "Code smell detection"
      ]
    },
    {
      id: 4,
      name: "Package",
      icon: Package,
      description: "Create deployment artifacts",
      duration: "2min",
      details: [
        "Docker image build",
        "Container registry push",
        "Artifact versioning"
      ]
    },
    {
      id: 5,
      name: "Deploy",
      icon: Rocket,
      description: "Deploy to production environment",
      duration: "4min",
      details: [
        "Blue-green deployment",
        "Health checks validated",
        "Rollback prepared"
      ]
    }
  ];

  const runPipeline = async () => {
    setIsRunning(true);
    setCompletedStages([]);
    setActiveStage(-1);

    for (let i = 0; i < stages.length; i++) {
      setActiveStage(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCompletedStages(prev => [...prev, i]);
    }

    setActiveStage(-1);
    setIsRunning(false);
  };

  const resetPipeline = () => {
    setActiveStage(-1);
    setCompletedStages([]);
    setIsRunning(false);
  };

  const getStageStatus = (stageId: number) => {
    if (completedStages.includes(stageId)) return "completed";
    if (activeStage === stageId) return "active";
    return "pending";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CI/CD Pipeline <span className="text-primary">Simulator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience Ferrari's automated deployment pipeline in action. 
              From code commit to production in under 20 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={runPipeline}
                disabled={isRunning}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                {isRunning ? "Pipeline Running..." : "Run Pipeline"}
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={resetPipeline}
                disabled={isRunning}
                className="border-border hover:bg-secondary"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Reset
              </Button>
            </div>
          </div>

          {/* Pipeline Visualization */}
          <div className="mb-16">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 hidden lg:block" />
              
              {/* Stages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                {stages.map((stage, index) => {
                  const status = getStageStatus(stage.id);
                  const StageIcon = stage.icon;
                  
                  return (
                    <div
                      key={stage.id}
                      className={`bg-card border-2 rounded-xl p-6 transition-all duration-500 cursor-pointer ${
                        status === "completed"
                          ? "border-primary shadow-[0_0_20px_hsl(9_100%_50%_/_0.3)]"
                          : status === "active"
                          ? "border-primary animate-glow-pulse scale-105"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => !isRunning && setActiveStage(stage.id)}
                    >
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                            status === "completed"
                              ? "bg-primary text-primary-foreground"
                              : status === "active"
                              ? "bg-primary/20 text-primary animate-pulse"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {status === "completed" ? (
                            <CheckCircle className="h-8 w-8" />
                          ) : (
                            <StageIcon className="h-8 w-8" />
                          )}
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-2">{stage.name}</h3>
                        
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-3 w-3" />
                          <span>{stage.duration}</span>
                        </div>
                        
                        <div
                          className={`text-xs px-3 py-1 rounded-full inline-block ${
                            status === "completed"
                              ? "bg-primary/10 text-primary"
                              : status === "active"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {status === "completed" ? "✓ Passed" : status === "active" ? "Running..." : "Pending"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stage Details */}
          {activeStage >= 0 && (
            <div className="bg-card border border-border rounded-xl p-8 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const StageIcon = stages[activeStage].icon;
                    return <StageIcon className="h-8 w-8 text-primary" />;
                  })()}
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3">{stages[activeStage].name}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {stages[activeStage].description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Stage Activities:</h3>
                    {stages[activeStage].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pipeline Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">17min</div>
              <div className="text-sm text-muted-foreground">Average Pipeline Duration</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">450+</div>
              <div className="text-sm text-muted-foreground">Deployments per Month</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Downtime Deployments</div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-6">Pipeline Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Automated Testing
                </h3>
                <p className="text-muted-foreground">
                  Every commit triggers comprehensive test suites covering unit, integration, 
                  and performance tests before deployment.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Blue-Green Deployment
                </h3>
                <p className="text-muted-foreground">
                  Zero-downtime releases using parallel environments with instant rollback 
                  capability in case of issues.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Security Scanning
                </h3>
                <p className="text-muted-foreground">
                  Automated vulnerability detection and dependency checking at every stage 
                  of the pipeline.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Infrastructure as Code
                </h3>
                <p className="text-muted-foreground">
                  Environment configurations stored in version control, enabling reproducible 
                  deployments across all environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineSimulator;
