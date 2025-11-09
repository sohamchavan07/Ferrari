import Navigation from "@/components/Navigation";
import { Cloud, Database, Lock, Zap, GitBranch, Code2, Server, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechnicalOverview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technical <span className="text-primary">Deep Dive</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An in-depth look at Ferrari's Azure DevOps implementation and architecture
            </p>
          </div>

          {/* Azure DevOps Platform */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 animate-slide-in-left">Azure DevOps Platform</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <GitBranch className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Azure Repos</h3>
                <p className="text-muted-foreground mb-4">
                  Git-based version control with enterprise-grade security and compliance features.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Branch policies enforcing code review requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Pull request workflows with automated checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Protected main branch with merge restrictions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Azure Pipelines</h3>
                <p className="text-muted-foreground mb-4">
                  Cloud-native CI/CD with multi-stage pipelines and parallel execution.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>YAML-defined pipelines stored in source control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Matrix builds for multiple environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Deployment gates with approval workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Azure Boards</h3>
                <p className="text-muted-foreground mb-4">
                  Agile project management with integrated sprint planning and tracking.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Scrum and Kanban boards for sprint management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Backlog prioritization with story points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Real-time burndown charts and velocity tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Azure Artifacts</h3>
                <p className="text-muted-foreground mb-4">
                  Package management for npm, NuGet, Maven, and Python packages.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Private package feeds with upstream sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Immutable artifact versioning for reproducibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Symbol server for debugging production issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Container Architecture */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 animate-slide-in-left">Container Orchestration</h2>
            
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-10 mb-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Azure Kubernetes Service (AKS)</h3>
                  <p className="text-lg text-muted-foreground">
                    Ferrari's microservices run on a highly available Kubernetes cluster, 
                    providing automatic scaling, self-healing, and zero-downtime deployments.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/50 border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Auto-Scaling</h4>
                  <p className="text-sm text-muted-foreground">
                    Horizontal Pod Autoscaler adjusts pod count based on CPU/memory usage 
                    and custom metrics like telemetry data volume.
                  </p>
                </div>
                
                <div className="bg-card/50 border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Service Mesh</h4>
                  <p className="text-sm text-muted-foreground">
                    Istio provides traffic management, security, and observability 
                    for microservice communication.
                  </p>
                </div>
                
                <div className="bg-card/50 border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-3">GitOps Workflow</h4>
                  <p className="text-sm text-muted-foreground">
                    Flux CD continuously syncs cluster state with Git repository, 
                    ensuring declarative infrastructure management.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Pipeline */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 animate-slide-in-left">Real-Time Data Pipeline</h2>
            
            <div className="bg-card border border-border rounded-xl p-10">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">Azure Event Hubs</h3>
                    <p className="text-muted-foreground mb-4">
                      Ingests millions of telemetry events per second from F1 cars during races.
                    </p>
                    <div className="bg-secondary/50 border border-border rounded-lg p-4">
                      <code className="text-sm text-primary">
                        Throughput: 2.5M events/sec | Latency: &lt;50ms | Retention: 7 days
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">Azure Stream Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Real-time processing and aggregation of sensor data with SQL-like queries.
                    </p>
                    <div className="bg-secondary/50 border border-border rounded-lg p-4">
                      <code className="text-sm text-primary">
                        Processing: Complex Event Processing (CEP) | Windows: Tumbling, Hopping, Sliding
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">Azure Cosmos DB</h3>
                    <p className="text-muted-foreground mb-4">
                      Globally distributed database with single-digit millisecond latency at any scale.
                    </p>
                    <div className="bg-secondary/50 border border-border rounded-lg p-4">
                      <code className="text-sm text-primary">
                        Multi-region write | Automatic indexing | 99.999% SLA
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security & Compliance */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 animate-slide-in-left">Security & Compliance</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <Lock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Identity & Access</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Azure Active Directory with MFA enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Role-Based Access Control (RBAC) for fine-grained permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Managed identities for service-to-service authentication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Secret Management</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Azure Key Vault for secrets, keys, and certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Automated secret rotation every 90 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                    <span>Audit logging for all secret access operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TechnicalOverview;
