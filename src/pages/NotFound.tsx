import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { AlertTriangle, WifiOff } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Deactivated Navbar */}
      <div className="grayscale opacity-60 pointer-events-none">
        <Navbar />
      </div>
      
      {/* Deactivated Hero with 404 Overlay */}
      <div className="relative">
        <div className="grayscale opacity-40 pointer-events-none">
          <Hero />
        </div>
        
        {/* 404 Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white max-w-lg mx-auto p-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <WifiOff className="h-24 w-24 text-red-400 animate-pulse" />
                <AlertTriangle className="h-12 w-12 text-yellow-400 absolute -top-2 -right-2" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-4 text-red-400">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Server Offline</h2>
            <p className="text-lg text-gray-300 mb-6">
              The page you're looking for seems to have gone offline. 
              Our systems are currently unavailable.
            </p>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                This website it created, hosted and managed by ArchITecht. If you have any inquires feel free to contact us.
              </p>
              
              <Button 
                onClick={() => window.location.href = "mailto:mr.digitized@gmail.com"}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
