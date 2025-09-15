import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  const handleFeeConsultationBtn = () => {
    console.log("Hi");

    navigate('/events')
  }
  return (
    <footer className="bg-muted/50 border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">EDEN CLICK EVENTS</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We turn your event dreams into reality with stress-free planning, creative design, and flawless execution. Your perfect event is our passion.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-emerald/10">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-emerald transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-emerald/10">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-emerald transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-emerald/10">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-emerald transition-colors" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">COMPANY</h4>
            <nav className="space-y-3">
              <Link to="/about" className="block text-muted-foreground hover:text-emerald transition-colors text-sm">
                About Us
              </Link>
              <Link to="/events" className="block text-muted-foreground hover:text-emerald transition-colors text-sm">
                Events
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-emerald transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">GET IN TOUCH</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  No.412 11, 1st Floor, 12th Main, 6th Block, Rajajinagar - 560010, Bangalore
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 8147125819</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald flex-shrink-0" />
                <p className="text-muted-foreground text-sm">edenclicks@gmail.com</p>
              </div>
            </div>

            <Button
              onClick={handleFeeConsultationBtn}
              className="bg-emerald hover:bg-emerald-dark text-white w-full sm:w-auto">
              Free Consultation
            </Button>

            <div className="space-y-3">
              <h5 className="text-sm font-medium text-foreground">International Offices:</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Dubai, UAE</p>
                <p>📍 Colombo, Sri Lanka</p>
                <p>📍 Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>Eden Click Events © 2025, All Rights Reserved</p>
              <p className="mt-1">Merchant Name: Mourise Dsouza</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-emerald transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-emerald transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-muted-foreground hover:text-emerald transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg h-14 w-14 p-0"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;