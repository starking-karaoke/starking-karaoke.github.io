import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Mic, Music, Star, Sparkles, Crown } from "lucide-react";
const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-[600px] bg-gradient-to-br from-red-600 via-red-500 to-red-700 overflow-hidden" style={{
    backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="12" cy="12" r="2"/><circle cx="48" cy="12" r="2"/><circle cx="12" cy="48" r="2"/><circle cx="48" cy="48" r="2"/></g></g></svg>')`
  }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-disco">
          <Sparkles className="h-12 w-12 text-funky-yellow/30" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce-slow">
          <Music className="h-16 w-16 text-white/40" />
        </div>
        <div className="absolute bottom-32 left-32 animate-pulse">
          <Star className="h-8 w-8 text-funky-purple/50" />
        </div>
        <div className="absolute bottom-20 right-20 animate-disco">
          <Mic className="h-10 w-10 text-funky-blue/40" />
        </div>
        <div className="absolute top-32 left-1/2 animate-bounce-slow">
          <Crown className="h-14 w-14 text-funky-yellow/50" />
        </div>
        <div className="absolute bottom-40 right-16 animate-pulse">
          <Star className="h-6 w-6 text-white/60" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center items-center min-h-[500px]">
          {/* Full Width Carousel */}
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/679c892c-d9ac-466d-93f2-a7f2110cf273.png" 
                    alt="Star & King karaoke duo performing"
                    className="w-full h-screen object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/3e3062e4-16c4-4708-b168-65d6c2f34662.png" 
                    alt="Star & King team selfie"
                    className="w-full h-screen object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/6bff3601-318d-4a5d-8696-d792c2358a62.png" 
                    alt="Star & King karaoke DJ services"
                    className="w-full h-screen object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
          </Carousel>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-900/80 to-transparent"></div>
    </section>;
};
export default Hero;