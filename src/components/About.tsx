import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Calendar, Heart, Crown, Star } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0 bg-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
            <Crown className="h-12 w-12 md:h-16 md:w-16 text-funky-yellow animate-pulse" />
            Meet <span className="bg-gradient-to-r from-funky-yellow to-funky-orange bg-clip-text text-transparent">Star &amp; King</span>
            <Star className="h-14 w-14 md:h-20 md:w-20 text-funky-orange animate-disco" />
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">Bringing the party to life with unforgettable karaoke experiences for your events, parties, and celebrations! 🎤✨</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-black/20 backdrop-blur-lg border border-blue-500/30 hover:scale-105 transition-transform duration-300 shadow-lg hover:bg-black/30">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-funky-yellow mx-auto mb-4 animate-bounce-slow" />
              <h3 className="text-xl font-bold text-white mb-2">Professional Duo</h3>
              <p className="text-white/70">Two experienced entertainers working in perfect harmony</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-lg border border-purple-500/30 hover:scale-105 transition-transform duration-300 shadow-lg hover:bg-black/30">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-funky-blue mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">10+ Years Experience</h3>
              <p className="text-white/70">Proven track record of amazing events and happy clients</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-lg border border-orange-500/30 hover:scale-105 transition-transform duration-300 shadow-lg hover:bg-black/30">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-funky-orange mx-auto mb-4 animate-disco" />
              <h3 className="text-xl font-bold text-white mb-2">50+ Events</h3>
              <p className="text-white/70">Birthdays, weddings, corporate events, and more!</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-lg border border-green-500/30 hover:scale-105 transition-transform duration-300 shadow-lg hover:bg-black/30">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-funky-purple mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction</h3>
              <p className="text-white/70">We don't stop until everyone's having the time of their life</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-funky-purple/10 to-funky-pink/10 backdrop-blur-lg rounded-3xl p-8 border border-funky-purple/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">Story for Star and King</p>
              <p className="text-white/80 text-lg leading-relaxed">Text of story for Star and King</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-funky-yellow to-funky-orange rounded-2xl p-8 text-center border border-funky-orange/50">
                <div className="text-6xl mb-4">🎤</div>
                <h4 className="text-2xl font-bold text-red-900 mb-2">Ready to Groove?</h4>
                <p className="text-gray-50 font-bold">Let's make your event unforgettable!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;