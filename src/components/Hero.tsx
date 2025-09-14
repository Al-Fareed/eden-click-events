import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, CheckCircle, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleBookEvent = () => {
    console.log("Book Your Event clicked");
  };

  const handleViewEvents = () => {
    console.log("View Events clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/90 to-emerald/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stress-Free Events,
            <br />
            <span className="text-gold">Priceless Memories</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            We've been there – the late-night planning sessions, the endless vendor calls, 
            the stress of getting everything perfect. That's exactly why we started Eden Click Events. 
            We take that burden off your shoulders, so you can focus on what truly matters – 
            celebrating your precious moments with the people who matter most.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
              <span className="text-white text-lg">
                No more sleepless nights worrying about arrangements
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="h-6 w-6 text-gold flex-shrink-0" />
              <span className="text-white text-lg">
                Personal attention to every detail, treating each event with care
              </span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              variant="hero"
              size="lg"
              onClick={handleBookEvent}
              className="text-lg px-8 py-3"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Event
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={handleViewEvents}
              className="text-lg px-8 py-3"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>

          {/* Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm md:text-base">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 text-sm md:text-base">Trusted Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80 text-sm md:text-base">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;