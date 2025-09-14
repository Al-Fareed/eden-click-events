import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase, GraduationCap, Palette, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const socialEvents = [
    {
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Weddings",
      description: "Your love story deserves the perfect celebration. From the nervous butterflies during mehendi to the joyful tears during pheras – we handle every precious moment with care.",
      price: "₹50,000 onwards",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Engagement Parties",
      description: "Celebrate the beginning of your journey with memorable engagement parties and intimate gatherings.",
      price: "₹25,000 onwards",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Anniversaries",
      description: "Celebrate years of love and togetherness with beautiful anniversary celebrations and milestone parties.",
      price: "₹25,000 onwards",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Birthday Parties",
      description: "Memorable birthday celebrations for all ages with themes, decorations, and entertainment.",
      price: "₹15,000 onwards",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Baby Showers",
      description: "Beautiful baby shower celebrations with decorations, games, and memorable moments.",
      price: "₹15,000 onwards",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Family Reunions",
      description: "Memorable family gatherings and reunion events with catering and entertainment.",
      price: "₹20,000 onwards",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Housewarming Parties",
      description: "Celebrate your new home with beautiful housewarming parties and blessing ceremonies.",
      price: "₹10,000 onwards"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Portfolio Shoots",
      description: "Professional portfolio photography for models, actors, and artists with multiple looks and setups.",
      price: "₹6,000 per session"
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Modeling Shoots",
      description: "Professional modeling photography sessions with various concepts, lighting setups, and styling options for aspiring and professional models.",
      price: "₹8,000 per session",
      customPayment: true
    }
  ];

  const corporateEvents = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Conferences",
      description: "Professional conferences and seminars with full event management.",
      customPayment: true
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Product Launches",
      description: "Spectacular product launch events that create buzz and excitement."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Corporate Retreats",
      description: "Team bonding retreats and corporate getaways for better productivity."
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Team-Building Events",
      description: "Engaging team-building activities and corporate entertainment events."
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Award Ceremonies",
      description: "Elegant award ceremonies and recognition events for corporate achievements."
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Trade Shows",
      description: "Professional trade show management and exhibition event coordination."
    }
  ];

  const educationalEvents = [
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Graduations",
      description: "Memorable graduation ceremonies and academic milestone celebrations."
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "School Events",
      description: "School annual functions, sports days, and educational program events."
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "College Events",
      description: "College fests, cultural events, and student activity programs."
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Proms",
      description: "Elegant prom nights and formal dance events for students."
    }
  ];

  const creativeEvents = [
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Book Launches",
      description: "Author book launches and literary events with media coverage."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Webinars",
      description: "Professional webinar setup and online event management services."
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Online Summits",
      description: "Virtual summit organization with multi-day online event coordination."
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Livestreams",
      description: "Professional livestream production and broadcast event services."
    }
  ];

  const navigate = useNavigate();

  const EventCard = ({ event }: { event: any }) => (
    <div className="h-full">
      <Card className="h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-serif">{event.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-1 flex flex-col">
          <CardDescription className="text-sm text-muted-foreground flex-1 mb-4">
            {event.description}
          </CardDescription>
          <div className="mt-auto">
            {event.price && (
              <div className="text-emerald font-bold mb-2 text-xl font-serif">
                {event.price}
              </div>
            )}
            {event.customPayment && (
              <div className="flex items-center text-green-600 text-sm mb-3">
                <CheckCircle className="w-4 h-4 mr-1" />
                Custom Payment Available
              </div>
            )}
            <div className="space-y-2">
              <Button 
                className="w-full bg-background text-foreground border hover:bg-muted"
                onClick={() => navigate('/cart')}
              >
                Book Now
              </Button>
              <Button 
              onClick={() => navigate('/contact')}
              variant="outline" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-emerald mb-6">
            Every Celebration Has a Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you're planning an intimate family dinner or the wedding of the century, we're here to bring your unique story to life. Browse through our services and imagine the possibilities.
          </p>
        </div>
      </section>

      {/* Social Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Heart className="w-6 h-6 text-emerald mr-3" />
            <h2 className="text-3xl font-serif text-emerald">Social Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {socialEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Events Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Briefcase className="w-6 h-6 text-emerald mr-3" />
            <h2 className="text-3xl font-serif text-emerald">Corporate & Professional Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {corporateEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-6 h-6 text-emerald mr-3" />
            <h2 className="text-3xl font-serif text-emerald">Educational Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {educationalEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Creative Events Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Palette className="w-6 h-6 text-gold mr-3" />
            <h2 className="text-3xl font-serif text-gold">Creative & Lifestyle Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {creativeEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;