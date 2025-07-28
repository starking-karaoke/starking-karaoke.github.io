import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Music, Users, Calendar, Sparkles, Heart } from "lucide-react";
const Services = () => {
  const services = [{
    icon: <Heart className="h-8 w-8" />,
    title: "Wedding Receptions",
    description: "Make your special day even more magical with personalized karaoke entertainment that gets everyone singing and dancing.",
    features: ["Custom song selection", "Romantic duets", "Reception entertainment", "Professional setup"],
    color: "from-funky-pink to-funky-purple",
    price: "Starting at $399"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Birthday Parties",
    description: "Turn any birthday into an unforgettable celebration with high-energy karaoke fun for all ages.",
    features: ["Age-appropriate songs", "Birthday specials", "Party games", "Photo opportunities"],
    color: "from-funky-blue to-funky-pink",
    price: "Starting at $249"
  }, {
    icon: <Calendar className="h-8 w-8" />,
    title: "Corporate Events",
    description: "Team building and networking events that break the ice and bring colleagues together through music.",
    features: ["Professional presentation", "Team building activities", "Flexible timing", "Corporate packages"],
    color: "from-funky-purple to-funky-blue",
    price: "Starting at $499"
  }, {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Private Parties",
    description: "Intimate gatherings or big celebrations - we bring the party atmosphere wherever you are.",
    features: ["Customizable playlist", "Intimate or large groups", "Home or venue setup", "Full sound system"],
    color: "from-funky-orange to-funky-yellow",
    price: "Starting at $299"
  }];
  return <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-funky-yellow to-funky-orange bg-clip-text text-transparent mb-6">Our Services</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring the perfect karaoke experience 
            tailored to your event's unique vibe and energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-600/30 backdrop-blur-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.color} w-fit mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </CardTitle>
                <Badge className={`bg-gradient-to-r ${service.color} text-white border-none w-fit`}>
                  {service.price}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                  {service.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-funky-pink rounded-full animate-pulse"></div>
                      <span className="text-white/70">{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Equipment Section */}
        <div className="bg-gradient-to-r from-funky-purple/10 to-funky-blue/10 backdrop-blur-lg rounded-3xl p-8 border border-funky-purple/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional Equipment & Setup
            </h3>
            <p className="text-white/80 text-lg">
              We bring everything needed for a perfect karaoke experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mic className="h-12 w-12 text-funky-pink mx-auto mb-4 animate-bounce-slow" />
              <h4 className="text-xl font-bold text-white mb-2">Professional Mics</h4>
              <p className="text-white/70">High-quality wireless microphones for crystal-clear vocals</p>
            </div>
            <div className="text-center">
              <Music className="h-12 w-12 text-funky-blue mx-auto mb-4 animate-disco" />
              <h4 className="text-xl font-bold text-white mb-2">Premium Sound</h4>
              <p className="text-white/70">State-of-the-art sound system with perfect acoustics</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-funky-yellow mx-auto mb-4 animate-pulse" />
              <h4 className="text-xl font-bold text-white mb-2">Lighting Effects</h4>
              <p className="text-white/70">Dynamic lighting to create the perfect party atmosphere</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;