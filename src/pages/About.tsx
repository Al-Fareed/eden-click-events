import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Heart, Baby, Shield } from "lucide-react";
import aboutEventImage from "@/assets/about-event-image.jpg";

const About = () => {
  const services = [
    {
      icon: Building2,
      title: "Corporate Celebrations",
      description: "When your company achieves something amazing, it deserves a celebration that matches that excitement. We turn business milestones into memorable moments that teams remember and talk about long after they leave."
    },
    {
      icon: Heart,
      title: "Wedding Dreams",
      description: "From the nervous excitement of the engagement to the happy tears during the ceremony – we understand that every Indian wedding is a festival of emotions. We're here to make sure yours is absolutely perfect."
    },
    {
      icon: Baby,
      title: "Life's Sweet Moments",
      description: "Birthday surprises that make hearts skip a beat, anniversary celebrations that honor love stories, and family gatherings where three generations laugh together – these are the moments we live for."
    },
    {
      icon: Shield,
      title: "Complete Peace of Mind",
      description: "While you're getting ready or greeting guests, we're making sure the flowers are fresh, the sound is perfect, and every single detail is exactly as you dreamed. That's our promise to you."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Header */}
          <div className="text-center mb-8">
            <p className="text-gold text-sm font-medium tracking-wider mb-4">ABOUT US</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Welcome to Eden Clicks Events
              </h1>
              
              <p className="text-muted-foreground leading-relaxed">
                You know that feeling when you walk into a beautifully organized event and everything just feels perfect? The decorations, the atmosphere, the seamless flow, the genuine connections happening all around? That's exactly what we aim to create at every single gathering. We're not just event planners– we're memory makers, stress-busters, and the people who genuinely care about making your special occasion as wonderful as you've always imagined it to be.
              </p>

              {/* Stats */}
              <div className="flex space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">5+</span>
                  </div>
                  <span className="text-muted-foreground text-sm">Years Creating Magic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">500+</span>
                  </div>
                  <span className="text-muted-foreground text-sm">Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutEventImage} 
                  alt="Eden Clicks Events - Professional event management"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-gold rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-gold rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-gold rounded-full opacity-30"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-gold rounded-full opacity-40"></div>
      </section>

      {/* What We Love Doing Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Love Doing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-background border-muted hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-gold rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-gold rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-gold rounded-full opacity-30"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-gold rounded-full opacity-40"></div>
      </section>

      <Footer />
    </div>
  );
};

export default About;