import Navigation from "@/components/Navigation";
import { Server, Network, Database, Shield, Gauge, Cloud } from "lucide-react";

const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Infrastructure <span className="text-primary">Architecture</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A high-performance, globally distributed cloud infrastructure built for speed and reliability
            </p>
          </div>

          {/* Architecture Diagram */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">System Architecture</h2>
            
            <div className="bg-card border border-border rounded-2xl p-10">
              <div className="space-y-12">
                {/* Layer 1: Edge & CDN */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <Network className="h-6 w-6 text-primary" />
                    Edge Layer
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Azure Front Door</h4>
                      <p className="text-sm text-muted-foreground">
                        Global load balancing and CDN with intelligent routing to nearest Azure region
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">WAF Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        Web Application Firewall with DDoS protection and bot mitigation
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">SSL/TLS</h4>
                      <p className="text-sm text-muted-foreground">
                        Automated certificate management with TLS 1.3 encryption
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
                </div>

                {/* Layer 2: Application */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <Server className="h-6 w-6 text-primary" />
                    Application Layer
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">AKS Cluster</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Kubernetes orchestration with auto-scaling node pools
                      </p>
                      <div className="text-xs text-primary">
                        3 node pools • 9-30 nodes • Multi-zone
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Microservices</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Containerized services for telemetry, analytics, and APIs
                      </p>
                      <div className="text-xs text-primary">
                        45 services • gRPC & REST • Service mesh
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Functions</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Serverless event-driven compute for background tasks
                      </p>
                      <div className="text-xs text-primary">
                        Consumption plan • 200M executions/month
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
                </div>

                {/* Layer 3: Data */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    Data Layer
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Cosmos DB</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        NoSQL database for real-time telemetry
                      </p>
                      <div className="text-xs text-primary">
                        Global replication • &lt;10ms reads
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Azure SQL</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Relational data for analytics and reporting
                      </p>
                      <div className="text-xs text-primary">
                        Hyperscale tier • Read replicas
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Redis Cache</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        In-memory cache for session and API responses
                      </p>
                      <div className="text-xs text-primary">
                        Premium tier • 99.9% SLA
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Blob Storage</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Object storage for logs and media files
                      </p>
                      <div className="text-xs text-primary">
                        Hot/Cool tiers • 12PB stored
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* High Availability */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">High Availability & Disaster Recovery</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Multi-Region Setup</h3>
                <p className="text-muted-foreground mb-6">
                  Active-active deployment across three Azure regions ensures continuous availability 
                  even during regional outages.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-medium">Primary:</span>
                    <span className="text-primary">West Europe</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-medium">Secondary:</span>
                    <span className="text-primary">North Europe</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-medium">Tertiary:</span>
                    <span className="text-primary">East US</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <Gauge className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">SLA Targets</h3>
                <p className="text-muted-foreground mb-6">
                  Aggressive service level agreements backed by automated monitoring and incident response.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Uptime</span>
                      <span className="text-primary font-bold">99.99%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-[99.99%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">API Response Time</span>
                      <span className="text-primary font-bold">&lt;100ms</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-[95%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Data Durability</span>
                      <span className="text-primary font-bold">99.999999999%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Monitoring & Observability */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Monitoring & Observability</h2>
            
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    Azure Monitor
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Full-stack monitoring with metrics, logs, and traces aggregated in Log Analytics workspace.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Custom dashboards and alerts</li>
                    <li>• 90-day retention period</li>
                    <li>• Integration with PagerDuty</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-primary" />
                    Application Insights
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    APM solution with distributed tracing across microservices and dependency mapping.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Request/dependency tracking</li>
                    <li>• Exception monitoring</li>
                    <li>• Live metrics streaming</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security Center
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous security assessment with vulnerability scanning and compliance reporting.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Threat detection with AI</li>
                    <li>• Regulatory compliance tracking</li>
                    <li>• Security recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Optimization */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Cost Optimization</h2>
            
            <div className="bg-card border border-border rounded-xl p-10">
              <p className="text-lg text-muted-foreground mb-8">
                Ferrari's cloud infrastructure is optimized for performance while maintaining cost efficiency 
                through strategic resource allocation and automation.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  <div className="text-xs text-muted-foreground mt-1">via Reserved Instances</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Auto</div>
                  <div className="text-sm text-muted-foreground">Scaling</div>
                  <div className="text-xs text-muted-foreground mt-1">Based on demand</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Resource Utilization</div>
                  <div className="text-xs text-muted-foreground mt-1">Improved efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Cost Monitoring</div>
                  <div className="text-xs text-muted-foreground mt-1">Budget alerts active</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
