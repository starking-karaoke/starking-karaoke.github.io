import React from "react";
import { Mic, Music, Facebook, Instagram, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-black/80 backdrop-blur-md border-t border-funky-purple/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Mic className="h-8 w-8 text-funky-pink animate-bounce-slow" />
                <Music className="h-4 w-4 text-funky-yellow absolute -top-1 -right-1 animate-disco" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-funky-purple to-funky-pink bg-clip-text text-transparent">
                StarKing
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Professional karaoke entertainment duo bringing unforgettable experiences 
              to your events, parties, and celebrations. Let's make some music together!
            </p>
            <div className="flex space-x-4">
              <button onClick={() => window.open("https://facebook.com/starking", "_blank")} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5 text-white" />
              </button>
              <button onClick={() => window.open("https://instagram.com/starking", "_blank")} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById("home")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-white/70 hover:text-funky-pink transition-colors duration-300">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-white/70 hover:text-funky-purple transition-colors duration-300">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-white/70 hover:text-funky-blue transition-colors duration-300">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("booking")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-white/70 hover:text-funky-orange transition-colors duration-300">
                  Book Event
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>📞 +1 715-701-4170</li>
              <li>✉️ starkingkaraoke11@gmail.com</li>
              <li>📍 Marinette, WI, United States, Wisconsin</li>
              <li>🕒 Available 7 Days/Week</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-funky-purple/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-center md:text-left mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start space-x-1">
                <span>© 2025 ArchITecht All rights reserved.</span>
                
                <span></span>
              </p>
            </div>
            <div className="flex space-x-6 text-white/60 text-sm">
              <button className="hover:text-funky-pink transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-funky-purple transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;