import React from "react";
import { Phone, Mail, MessageCircle, Calendar, Send, MapPin, Clock, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBackground from "@/assets/hero-background.jpg";
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
        className="relative min-h-[75vh] bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch With<br />
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
                className="border-gold text-white hover:bg-gold hover:text-black px-8 text-white bg-transparent"
                asChild
              >
                <a href="tel:+918147125819">
                  <Phone className="mr-2 h-5 w-5 " />
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emerald mb-4">TELL US ABOUT YOUR EVENT</h2>
              <p className="text-xl text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 81471 25819"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-semibold mb-2">Event Type *</label>
                      <select
                        id="eventType"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding & Reception</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="conference">Conference & Seminar</option>
                        <option value="product-launch">Product Launch</option>
                        <option value="charity">Charity Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-semibold mb-2">Preferred Event Date</label>
                      <input
                        type="date"
                        id="eventDate"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="guestCount" className="block text-sm font-semibold mb-2">Expected Guest Count</label>
                      <select
                        id="guestCount"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select Guest Count</option>
                        <option value="1-25">1-25 guests</option>
                        <option value="26-50">26-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-200">101-200 guests</option>
                        <option value="201-500">201-500 guests</option>
                        <option value="500+">500+ guests</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold mb-2">Budget Range</label>
                      <select
                        id="budget"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-1l">Under ₹1,00,000</option>
                        <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                        <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                        <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                        <option value="10l-25l">₹10,00,000 - ₹25,00,000</option>
                        <option value="25l+">₹25,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Tell us about your vision *</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your event ideas, special requirements, venue preferences, or any questions you have..."
                      className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-emerald hover:bg-emerald/90 text-white px-8"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">OUR OFFICES</h2>
            <p className="text-xl text-muted-foreground">We serve clients across multiple locations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Main Office */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <MapPin className="text-gold text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald mb-2">Main Office - Bangalore</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>No.412 II, 1st Floor, 12th Main,</p>
                      <p>6th Block, Rajajinagar - 560010</p>
                      <p>Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="text-emerald mr-3" />
                    <a href="tel:+918147125819" className="text-emerald hover:underline">+91 8147125819</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-emerald mr-3" />
                    <a href="mailto:edenclicks@gmail.com" className="text-emerald hover:underline">edenclicks@gmail.com</a>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <Clock className="text-muted-foreground mr-3 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">Business Hours:</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-emerald hover:bg-emerald/90 text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* 24/7 Support */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <Clock className="text-gold text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">For urgent matters during event planning or on event day:</p>
                  </div>
                </div>

                <div className="bg-emerald text-white p-4 rounded-lg mb-4 text-center">
                  <Phone className="mx-auto mb-2 h-6 w-6" />
                  <p className="font-bold text-lg">Emergency: +91 8147125819</p>
                </div>

                <p className="text-muted-foreground text-center">Available 24/7 during event week</p>
              </CardContent>
            </Card>
          </div>

          {/* International Offices */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-muted-foreground">International Offices</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Dubai Office */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Building className="text-gold text-4xl mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">Dubai Office</h4>
                <div className="text-muted-foreground space-y-2 mb-4">
                  <p>G 10 SS BC, JABAL ALI</p>
                  <p>INDUSTRIAL AREA 1</p>
                  <p>Post Box 4333, Dubai, UAE</p>
                </div>
                <p className="text-sm text-emerald font-semibold">Middle East Operations</p>
              </CardContent>
            </Card>

            {/* Sri Lanka Office */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Building className="text-gold text-4xl mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">Sri Lanka Office</h4>
                <div className="text-muted-foreground space-y-2 mb-4">
                  <p>46/8 Ananda Coomaraswamy</p>
                  <p>Mawatha, Colombo 00300</p>
                  <p>Sri Lanka</p>
                </div>
                <p className="text-sm text-emerald font-semibold">South Asia Operations</p>
              </CardContent>
            </Card>

            {/* Nepal Office */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Building className="text-gold text-4xl mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">Nepal Office</h4>
                <div className="text-muted-foreground space-y-2 mb-4">
                  <p>P876+934, Chakibaril Marg</p>
                  <p>Kathmandu 44600</p>
                  <p>Nepal</p>
                </div>
                <p className="text-sm text-emerald font-semibold">Himalayan Region</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-0 shadow-sm bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How far in advance should I book my event?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  We recommend booking your event at least 3-6 months in advance, especially for weddings and large corporate events. However, we can accommodate shorter timelines based on availability and event complexity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0 shadow-sm bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you provide all vendors or can I choose my own?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  We offer both options! We have trusted vendor partnerships for seamless coordination, but you're welcome to bring your own vendors. We'll work with any team to ensure your event runs smoothly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0 shadow-sm bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What's included in your event planning services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Our services include venue selection, vendor coordination, timeline management, design consultation, budget management, and day-of coordination. Specific inclusions vary by service level and event type.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0 shadow-sm bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Our cancellation policy varies by contract terms and timing. We understand that circumstances change and work with clients to find fair solutions. Full details are provided in your service agreement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;