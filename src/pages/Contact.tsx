import React from "react";
import { Phone, Mail, MessageCircle, Calendar, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[75vh] bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch With<br/>
              <span className="text-gold">Eden Click Events</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Ready to bring your event vision to life? Let's start planning something extraordinary together. 
              Our team is here to make your special day unforgettable.
            </p>
            
            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Phone className="text-gold text-2xl mr-4" />
                <div>
                  <div className="font-semibold text-lg">Call Us</div>
                  <div className="text-white/75">+91 8147125819</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-gold text-2xl mr-4" />
                <div>
                  <div className="font-semibold text-lg">Email Us</div>
                  <div className="text-white/75">edenclicks@gmail.com</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-emerald hover:bg-emerald/90 text-white px-8"
                onClick={() => document.getElementById('contact-methods')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold text-white hover:bg-gold hover:text-black px-8"
                asChild
              >
                <a href="tel:+918147125819">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us Section */}
      <section id="contact-methods" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald mb-4">HOW TO REACH US</h2>
            <p className="text-xl text-muted-foreground">Choose your preferred way to connect with our team</p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Phone Call */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
                  <Phone className="text-emerald text-3xl" />
                </div>
                <h5 className="text-xl font-bold mb-4">Phone Call</h5>
                <p className="text-muted-foreground mb-6">Speak directly with our event specialists</p>
                <Button 
                  className="bg-emerald hover:bg-emerald/90 text-white w-full"
                  asChild
                >
                  <a href="tel:+918147125819">+91 8147125819</a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Email */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
                  <Mail className="text-emerald text-3xl" />
                </div>
                <h5 className="text-xl font-bold mb-4">Email</h5>
                <p className="text-muted-foreground mb-6">Send us your detailed inquiry</p>
                <Button 
                  className="bg-emerald hover:bg-emerald/90 text-white w-full"
                  asChild
                >
                  <a href="mailto:edenclicks@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
            
            {/* WhatsApp */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
                  <MessageCircle className="text-emerald text-3xl" />
                </div>
                <h5 className="text-xl font-bold mb-4">WhatsApp</h5>
                <p className="text-muted-foreground mb-6">Quick chat for instant responses</p>
                <Button 
                  className="bg-emerald hover:bg-emerald/90 text-white w-full"
                  asChild
                >
                  <a href="https://wa.me/918147125819" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Book Meeting */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
                  <Calendar className="text-emerald text-3xl" />
                </div>
                <h5 className="text-xl font-bold mb-4">Book Meeting</h5>
                <p className="text-muted-foreground mb-6">Schedule a free consultation</p>
                <Button 
                  className="bg-emerald hover:bg-emerald/90 text-white w-full"
                  onClick={() => window.open('https://wa.me/918147125819?text=Hi, I would like to schedule a consultation for my event.', '_blank')}
                >
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;