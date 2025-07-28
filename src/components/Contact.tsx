import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-funky-yellow to-funky-orange bg-clip-text text-transparent">Get In</span> <span className="bg-gradient-to-r from-funky-yellow to-funky-orange bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to bring the party to life? Contact us today and let's make your event unforgettable!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-600/30 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-funky-pink p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Call Us</h3>
                    <p className="text-white/80">+1 715-701-4170</p>
                    <p className="text-white/60 text-sm">Available 9AM - 9PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-600/30 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-funky-blue p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email Us</h3>
                    <p className="text-white/80">
starkingkaraoke11@gmail.com</p>
                    <p className="text-white/60 text-sm">We reply within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-600/30 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-funky-orange p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Service Area</h3>
                    <p className="text-white/80">Marinette, WI, United States, Wisconsin</p>
                    <p className="text-white/60 text-sm">50 mile radius from downtown</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-600/30 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-funky-pink p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Availability</h3>
                    <p className="text-white/80">7 Days a Week</p>
                    <p className="text-white/60 text-sm">Flexible scheduling for your event</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Quick Contact */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-600/30 backdrop-blur-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Stay connected with us on social media for behind-the-scenes content, 
                  event highlights, and special offers!
                </p>
                
                <div className="flex justify-center space-x-4 mb-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105" onClick={() => window.open("https://www.facebook.com/profile.php?id=61563585142656", "_blank")}>
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook Page
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105" onClick={() => window.open("https://instagram.com/grooveduo", "_blank")}>
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                </div>

                <div className="border-t border-funky-purple/30 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Join Our Community</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-funky-blue text-funky-blue hover:bg-funky-blue hover:text-white transition-colors" onClick={() => window.open("https://facebook.com/groups/grooveduo-community", "_blank")}>
                      <Facebook className="h-4 w-4 mr-2" />
                      Join our Facebook Group
                    </Button>
                    <p className="text-white/60 text-sm">
                      Connect with other party enthusiasts and get event planning tips!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-to-r from-funky-purple to-funky-pink border-none backdrop-blur-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Groove? 🎤</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Don't wait - let's start planning your unforgettable karaoke experience today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-funky-purple hover:bg-white/90 font-bold flex-1" onClick={() => {
                  const element = document.getElementById("booking");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth"
                    });
                  }
                }}>
                    Book Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-funky-purple font-bold flex-1" onClick={() => window.open("tel:+15554766831", "_blank")}>
                    Call Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;