import React, { useState } from "react";
import { Menu, X, Mic, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Mic className="h-10 w-10 text-funky-yellow animate-bounce-slow" />
              <Music className="h-4 w-4 text-funky-yellow absolute -top-1 -right-1 animate-disco" />
            </div>
            <span className="text-2xl bg-gradient-to-r from-funky-yellow to-funky-orange bg-clip-text text-transparent font-extrabold">Star &amp; King</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-funky-pink transition-colors duration-300 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-funky-purple transition-colors duration-300 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-white hover:text-funky-blue transition-colors duration-300 font-medium">
              Services
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-funky-purple to-funky-pink hover:from-funky-pink hover:to-funky-purple transition-all duration-300 animate-pulse-glow">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-funky-pink transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 p-4 border border-white/20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-funky-pink transition-colors duration-300 font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-funky-purple transition-colors duration-300 font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-white hover:text-funky-blue transition-colors duration-300 font-medium text-left">
                Services
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-funky-purple to-funky-pink hover:from-funky-pink hover:to-funky-purple transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;