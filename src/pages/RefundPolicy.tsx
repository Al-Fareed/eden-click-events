import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Clock, AlertCircle, Mail, Phone, FileText, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald rounded-full mx-auto mb-4 flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
            Refund Policy
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding your rights and options regarding event bookings
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-700 dark:text-blue-400">Refund Policy for Event Bookings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 dark:text-blue-300">
                Thank you for choosing Eden Clicks Events. We strive to provide our customers with the best 
                experience possible. Please read our refund policy carefully to understand your rights and 
                options regarding event bookings.
              </p>
            </CardContent>
          </Card>

          {/* General Policy */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">1. General Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All ticket purchases are final. However, we understand that unforeseen circumstances can arise. 
                Therefore, we offer the following refund options based on the type of event and timing of your request.
              </p>
            </CardContent>
          </Card>

          {/* Refund Eligibility */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">2. Refund Eligibility</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-300">Full Refunds:</p>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    You may request a full refund if you cancel your booking at least 5 days prior to the event date.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-300">Partial Refunds:</p>
                  <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                    Cancellations made 3 days prior to the event will be eligible for a 60% refund of the ticket price.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-800 dark:text-red-300">No Refunds:</p>
                  <p className="text-red-700 dark:text-red-400 text-sm">
                    Cancellations made less than 2 days before the event are not eligible for refunds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Cancellation */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">3. Event Cancellation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In the event that an event is canceled by the organizer, you will be notified via email, 
                and you will receive a full refund of your ticket price, including any processing fees.
              </p>
            </CardContent>
          </Card>

          {/* Transfer of Tickets */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <RefreshCw className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">4. Transfer of Tickets</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you are unable to attend the event, you may transfer your ticket to another individual. 
                Please contact our support team at <span className="text-emerald font-medium">edenclicks@gmail.com</span> 
                for assistance with the transfer.
              </p>
            </CardContent>
          </Card>

          {/* Requesting a Refund */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">5. Requesting a Refund</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">To request a refund, please follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Contact our support team at <span className="text-emerald font-medium">edenclicks@gmail.com</span>.</li>
                <li>Provide your booking reference number and the reason for the cancellation.</li>
                <li>For eligible requests, refunds will be processed within <span className="text-emerald font-medium">+91 8147125819</span> business days.</li>
                <li>Once approved for refund, the Amount will be credited within 10-15 working days on your original payment method.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">6. Changes to This Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to update this refund policy at any time. Any changes will be posted 
                on this page with an updated effective date. Please review this policy periodically to stay informed.
              </p>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">7. Contact Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions regarding our refund policy, please reach out to us at 
                <span className="text-emerald font-medium"> edenclicks@gmail.com</span>.
              </p>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="bg-emerald/5 border-emerald/20">
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl text-emerald">Important Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Please read our refund policy carefully to understand your rights and options regarding 
                event bookings. All ticket purchases are final, but we offer refund options based on 
                timing and circumstances.
              </p>
              <p className="text-muted-foreground">
                For any questions or concerns regarding our refund policy, please contact us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;