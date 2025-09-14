import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Brain, Shield, DollarSign, Phone, MessageSquare } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "We Handle Everything",
      description: "From the first phone call to the final cleanup – you relax while we work our magic. It's like having a trusted friend take care of all the overwhelming details."
    },
    {
      icon: Brain,
      title: "Your Vision, Our Creativity",
      description: "We listen to your dreams and let our creative touch bring them to life. Every event reflects your unique style – because one-size-fits-all celebrations simply aren't our approach."
    },
    {
      icon: Shield,
      title: "Peace of Mind Guarantee",
      description: "Sleep well knowing experienced hands are managing every detail. We've handled the unexpected so many times, we're practically fortune tellers when it comes to event planning!"
    },
    {
      icon: DollarSign,
      title: "Honest Pricing, Real Value",
      description: "No hidden surprises or last-minute charges. We believe in transparent conversations about budget from day one, because trust is the foundation of great partnerships."
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            WHY CLIENTS CHOOSE US
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Because we treat every event like it's our own special celebration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-background border-muted hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-emerald" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-background rounded-2xl p-8 border border-muted">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Let's Chat About Your Vision
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every great celebration starts with a conversation. Share your ideas with us over a cup of 
            chai – we promise it'll be the most relaxed planning meeting you've ever had.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-emerald hover:bg-emerald-dark text-white"
              size="lg"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Today
            </Button>
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-gold rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-gold rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-gold rounded-full opacity-30"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-gold rounded-full opacity-40"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;