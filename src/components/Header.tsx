import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")} className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Divine Dev Solutions
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("services")} className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="hero" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in fade-in slide-in-from-top-5">
            <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
              Testimonials
            </button>
            <div className="px-4 pt-2">
              <Button onClick={() => scrollToSection("contact")} variant="hero" size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
