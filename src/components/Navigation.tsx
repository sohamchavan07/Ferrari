import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ferrariLogo from "@/assets/ferrari-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/pipeline", label: "Pipeline Simulator" },
    { path: "/models", label: "models" },
    { path: "/technical-overview", label: "Technical Overview" },
    { path: "/infrastructure", label: "Infrastructure" },
    { path: "/azure-tools", label: "Azure Tools" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={ferrariLogo} alt="Ferrari Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl hidden sm:block">Ferrari DevOps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              // special handling for the models section: scroll on same page or navigate with state
              if (link.path === "/models") {
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      if (location.pathname === "/") {
                        document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        // navigate to home and instruct it to scroll to models
                        navigate('/', { state: { scrollTo: 'models' } });
                      }
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              if (link.path === "/models") {
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      if (location.pathname === "/") {
                        document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/', { state: { scrollTo: 'models' } });
                      }
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
