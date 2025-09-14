import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Camera, Database, Music, GraduationCap, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Life's Beautiful Moments",
      description: "From intimate mehendi ceremonies to grand wedding receptions, cozy birthday gatherings to milestone anniversaries – we understand that each celebration tells a unique story. Let us help you write yours beautifully.",
      price: "₹15,000 onwards",
      priceType: "fixed"
    },
    {
      icon: Camera,
      title: "Capturing Your Glow",
      description: "Whether it's the radiant mom-to-be during her maternity shoot or the confident professional building their portfolio – we believe every person has a unique light. Our job is to capture it perfectly.",
      price: "₹8,000 onwards",
      priceType: "fixed"
    },
    {
      icon: Database,
      title: "Making Business Personal",
      description: "Your corporate events reflect your company's values. From product launches that create buzz to team retreats that build bonds – we ensure your professional gatherings leave lasting impressions.",
      price: "Custom Quotes",
      priceType: "custom"
    },
    {
      icon: Music,
      title: "Where Art Meets Celebration",
      description: "Fashion shows that showcase creativity, concerts that move souls, dance performances that tell stories – we love bringing artistic visions to life. Your creative dreams deserve a grand stage.",
      price: "Custom Quotes",
      priceType: "custom"
    },
    {
      icon: GraduationCap,
      title: "Celebrating Young Achievers",
      description: "From the proud parents at their child's graduation to students celebrating their farewell – educational milestones deserve special recognition. We make these moments as memorable as the achievements themselves.",
      price: "Custom Quotes",
      priceType: "custom"
    },
    {
      icon: Lightbulb,
      title: "Ideas That Inspire",
      description: "Book launches for emerging authors, webinars that educate, livestreams that connect communities – we're passionate about helping ideas reach the right audience in the most impactful way.",
      price: "Custom Quotes",
      priceType: "custom"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="mx-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                CELEBRATIONS WE CRAFT WITH LOVE
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every occasion deserves to be special – let's make yours unforgettable
              </p>
            </div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative bg-muted/20 border-muted transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-background rounded-full flex items-center justify-center border border-muted">
                    <Icon className="h-8 w-8 text-emerald" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-4 justify-center">
                  <Button 
                    variant={service.priceType === "fixed" ? "default" : "outline"}
                    size="sm"
                    className={service.priceType === "fixed" ? "bg-emerald text-white hover:bg-emerald-dark" : ""}
                  >
                    {service.price}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Events
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-10 top-10 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="absolute left-20 bottom-20 w-1 h-1 bg-gold rounded-full opacity-40"></div>
        <div className="absolute right-32 bottom-32 w-1.5 h-1.5 bg-gold rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Services;