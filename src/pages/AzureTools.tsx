import Navigation from "@/components/Navigation";
import { GitBranch, Code2, Database, Cloud, Zap, Shield, BarChart3, Package } from "lucide-react";

const AzureTools = () => {
  const tools = [
    {
      icon: GitBranch,
      name: "Azure Repos",
      category: "Version Control",
      description: "Enterprise Git repositories with advanced branch policies and pull request workflows.",
      features: [
        "Unlimited private repositories",
        "Branch policies with required reviewers",
        "Pull request templates and automation",
        "Code search across repositories"
      ],
      metrics: {
        repos: "180+",
        commits: "50K/month",
        pullRequests: "1.2K/month"
      }
    },
    {
      icon: Code2,
      name: "Azure Pipelines",
      category: "CI/CD",
      description: "Cloud-scale continuous integration and deployment pipelines with multi-stage workflows.",
      features: [
        "YAML pipeline definitions",
        "Matrix builds for parallel execution",
        "Deployment gates and approvals",
        "Integration with Azure and external tools"
      ],
      metrics: {
        pipelines: "350+",
        builds: "15K/month",
        deployments: "450/month"
      }
    },
    {
      icon: Database,
      name: "Azure Boards",
      category: "Project Management",
      description: "Agile planning tools with Scrum and Kanban boards for tracking work items and sprints.",
      features: [
        "Customizable work item types",
        "Sprint planning and capacity tracking",
        "Burndown and velocity charts",
        "Integration with repos and pipelines"
      ],
      metrics: {
        workItems: "8K+",
        sprints: "24/year",
        teams: "12"
      }
    },
    {
      icon: Package,
      name: "Azure Artifacts",
      category: "Package Management",
      description: "Universal package management for npm, NuGet, Maven, and Python with upstream sources.",
      features: [
        "Private package feeds",
        "Upstream source caching",
        "Immutable package versions",
        "Symbol server for debugging"
      ],
      metrics: {
        packages: "2.5K+",
        downloads: "100K/month",
        storage: "150GB"
      }
    },
    {
      icon: BarChart3,
      name: "Azure Monitor",
      category: "Observability",
      description: "Comprehensive monitoring solution with metrics, logs, and distributed tracing.",
      features: [
        "Custom metrics and dashboards",
        "Alert rules with action groups",
        "Log Analytics queries (KQL)",
        "Integration with Application Insights"
      ],
      metrics: {
        metrics: "10M/day",
        alerts: "500+",
        dashboards: "45"
      }
    },
    {
      icon: Zap,
      name: "Azure Functions",
      category: "Serverless",
      description: "Event-driven serverless compute for running code without managing infrastructure.",
      features: [
        "Multiple language support",
        "Trigger-based execution",
        "Durable function orchestration",
        "Consumption-based pricing"
      ],
      metrics: {
        functions: "280+",
        executions: "200M/month",
        avgDuration: "450ms"
      }
    },
    {
      icon: Shield,
      name: "Azure Key Vault",
      category: "Security",
      description: "Centralized secrets management with hardware security module (HSM) backing.",
      features: [
        "Secrets, keys, and certificate storage",
        "Automated secret rotation",
        "Access policies and RBAC",
        "Audit logging and monitoring"
      ],
      metrics: {
        secrets: "450+",
        operations: "25M/month",
        vaults: "6"
      }
    },
    {
      icon: Cloud,
      name: "Azure DevTest Labs",
      category: "Development",
      description: "Quickly provision development and test environments with cost controls and policies.",
      features: [
        "Template-based VM creation",
        "Auto-shutdown policies",
        "Cost tracking per lab",
        "Custom images and formulas"
      ],
      metrics: {
        labs: "8",
        environments: "120+",
        costSavings: "€45K/year"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Azure <span className="text-primary">Tools Suite</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ferrari's integrated DevOps toolchain powered by Azure services
            </p>
          </div>

          {/* Tools Grid */}
          <div className="space-y-12">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-[auto_1fr] gap-8">
                    {/* Icon & Title */}
                    <div className="flex md:flex-col items-start gap-4">
                      <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="md:text-center">
                        <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                          {tool.category}
                        </div>
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground">
                        {tool.description}
                      </p>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {tool.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                        {Object.entries(tool.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-2xl font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Integration Benefits */}
          <div className="mt-20 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Azure DevOps?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">100%</div>
                <h3 className="font-semibold mb-2">Integrated Platform</h3>
                <p className="text-sm text-muted-foreground">
                  All tools work seamlessly together without complex integrations
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">65%</div>
                <h3 className="font-semibold mb-2">Faster Development</h3>
                <p className="text-sm text-muted-foreground">
                  Automated workflows and shared context accelerate delivery
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">99.9%</div>
                <h3 className="font-semibold mb-2">Platform Uptime</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade reliability with SLA-backed guarantees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AzureTools;
