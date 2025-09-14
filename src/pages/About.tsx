import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Heart, Baby, Shield, Ear, Target, Sparkles, CheckCircle } from "lucide-react";
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

  const clientRetention = [
    {
      icon: Ear,
      title: "We Actually Listen",
      description: "When you tell us your vision, we remember every detail. When you mention specific preferences or requirements, we plan for them. Small details matter because they make all the difference in creating memorable experiences."
    },
    {
      icon: Target,
      title: "Your Story, Our Mission",
      description: "No two events are the same, so why should celebration be? We spend time understanding what makes your occasion unique and create an experience that feels authentically yours."
    },
    {
      icon: Sparkles,
      title: "The Little Things",
      description: "From ensuring accessibility for all attendees to creating comfortable spaces for networking, managing dietary requirements to coordinating with multiple stakeholders – we think about everyone, because everyone matters."
    },
    {
      icon: CheckCircle,
      title: "Promises We Keep",
      description: "When we say we'll call you back, we do. When we promise something will be ready by a certain time, it is. Your trust in us is sacred, and we never take it for granted."
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
      </section>

      {/* Why Clients Keep Coming Back Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Clients Keep Coming Back to Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clientRetention.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-blue-50 border-blue-200 p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gold">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
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
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Shall We Plan Something Beautiful Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Come, sit with us over some chai. Share your dreams, your vision, your creative ideas – we love hearing them all. Let's create something that you and your guests will treasure forever.
          </p>
          <Button 
            size="lg"
            className="bg-emerald hover:bg-emerald-dark text-white px-8 py-3"
          >
            Let's Start Planning
          </Button>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-gold rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-gold rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
      </section>

      <Footer />
    </div>
  );
};

export default About;