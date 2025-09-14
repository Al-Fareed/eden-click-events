import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Package, Shield, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    streetAddress: "",
    apartment: "",
    city: "",
    state: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
            Complete Your Booking
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please provide your details to confirm your event service
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Selection */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Package Selection</CardTitle>
                    <p className="text-sm text-muted-foreground">Choose your preferred package</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Label htmlFor="package">Select Package</Label>
                  <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engagement-25000">Engagement Parties - ₹25,000 onwards</SelectItem>
                      <SelectItem value="wedding-50000">Weddings - ₹50,000 onwards</SelectItem>
                      <SelectItem value="birthday-15000">Birthday Parties - ₹15,000 onwards</SelectItem>
                      <SelectItem value="corporate-conference">Corporate Conferences - Custom Pricing</SelectItem>
                      <SelectItem value="anniversary-25000">Anniversaries - ₹25,000 onwards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Billing Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Billing Details</CardTitle>
                    <p className="text-sm text-muted-foreground">Your billing information</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Country/Region *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="USA">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="streetAddress">Street Address *</Label>
                  <Input
                    id="streetAddress"
                    placeholder="House number and street name"
                    value={formData.streetAddress}
                    onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="apartment">Apartment, suite, etc.</Label>
                  <Input
                    id="apartment"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    value={formData.apartment}
                    onChange={(e) => handleInputChange("apartment", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Town/City *</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
                <p className="text-sm text-muted-foreground">Review your booking details</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center mb-2">
                    <Package className="w-4 h-4 text-emerald mr-2" />
                    <span className="font-medium">Engagement Parties</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Celebrate the beginning of your journey with memorable engagement parties and intimate gatherings.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span>Category:</span>
                      <span className="px-2 py-1 bg-emerald text-white rounded text-xs">Social</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <Package className="w-4 h-4 text-muted-foreground mr-2" />
                    <span className="font-medium">Package Selected</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Package: <span className="text-foreground">Not selected</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Amount: <span className="text-emerald font-medium">₹25,000 onwards</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total Amount:</span>
                    <span>-</span>
                  </div>
                </div>

                <Button className="w-full bg-emerald hover:bg-emerald/90 text-white">
                  Complete Booking
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Secure</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Support</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;