
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Building2, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", path: "/", icon: Home },
    { name: "Entidades", path: "/entidades", icon: Building2 },
    { name: "Sobre", path: "/sobre", icon: Users },
    { name: "Contato", path: "/contato", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity smooth-focus focus-visible:outline-primary">
            <div className="w-10 h-10 gradient-insper rounded-xl flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">Hub Entidades</span>
              <span className="text-xs text-insper-gray font-medium">Insper</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 smooth-focus ${
                  isActive(item.path)
                    ? "text-primary bg-insper-red-light border border-primary/20"
                    : "text-insper-gray-dark hover:text-primary hover:bg-insper-red-light/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 smooth-focus"
              aria-label="Menu de navegação"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-b-lg shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 smooth-focus ${
                    isActive(item.path)
                      ? "text-primary bg-insper-red-light border border-primary/20"
                      : "text-insper-gray-dark hover:text-primary hover:bg-insper-red-light/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
