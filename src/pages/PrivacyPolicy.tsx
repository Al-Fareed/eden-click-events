import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Cookie, Share2, Database, FileText, Lock, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald rounded-full mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Who We Are */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Who We Are</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our website address is: <span className="text-emerald font-medium">https://edenclicks.com</span>
              </p>
            </CardContent>
          </Card>

          {/* Comments */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Comments</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                When visitors leave comments on the site we collect the data shown in the comments form, 
                and also the visitor's IP address and browser user agent string to help spam detection.
              </p>
            </CardContent>
          </Card>

          {/* Media */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Media</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you upload images to the website, you should avoid uploading images with embedded 
                location data (EXIF GPS) included. Visitors to the website can download and extract 
                any location data from images on the website.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Cookies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you leave a comment on our site you may opt-in to saving your name, email address 
                and website in cookies. These are for your convenience so that you do not have to fill 
                in your details again when you leave another comment. These cookies will last for one year.
              </p>
              <p className="text-muted-foreground">
                If you visit our login page, we will set a temporary cookie to determine if your browser 
                accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
              </p>
              <p className="text-muted-foreground">
                When you log in, we will also set up several cookies to save your login information and 
                your screen display choices. Login cookies last for two days, and screen options cookies 
                last for a year. If you select "Remember Me", your login will persist for two weeks. 
                If you log out of your account, the login cookies will be removed.
              </p>
              <p className="text-muted-foreground">
                If you edit or publish an article, an additional cookie will be saved in your browser. 
                This cookie includes no personal data and simply indicates the post ID of the article 
                you just edited. It expires after 1 day.
              </p>
            </CardContent>
          </Card>

          {/* Embedded Content */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Embedded Content from Other Websites</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
                Embedded content from other websites behaves in the exact same way as if the visitor has 
                visited the other website.
              </p>
              <p className="text-muted-foreground">
                These websites may collect data about you, use cookies, embed additional third-party tracking, 
                and monitor your interaction with that embedded content, including tracking your interaction 
                with the embedded content if you have an account and are logged in to that website.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Who We Share Your Data With</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you request a password reset, your IP address will be included in the reset email.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">How Long We Retain Your Data</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you leave a comment, the comment and its metadata are retained indefinitely. This is 
                so we can recognize and approve any follow-up comments automatically instead of holding 
                them in a moderation queue.
              </p>
              <p className="text-muted-foreground">
                For users that register on our website (if any), we also store the personal information 
                they provide in their user profile. All users can see, edit, or delete their personal 
                information at any time (except they cannot change their username). Website administrators 
                can also see and edit that information.
              </p>
            </CardContent>
          </Card>

          {/* Data Rights */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">What Rights You Have Over Your Data</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have an account on this site, or have left comments, you can request to receive 
                an exported file of the personal data we hold about you, including any data you have 
                provided to us. You can also request that we erase any personal data we hold about you. 
                This does not include any data we are obliged to keep for administrative, legal, or 
                security purposes.
              </p>
            </CardContent>
          </Card>

          {/* Data Transmission */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Where Your Data Is Sent</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visitor comments may be checked through an automated spam detection service.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Commitment */}
          <Card className="bg-emerald/5 border-emerald/20">
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl text-emerald">Your Privacy Matters</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We are committed to protecting your privacy and handling your personal data responsibly. 
                This privacy policy explains how we collect, use, and protect your information when you 
                use our website and services.
              </p>
              <p className="text-muted-foreground">
                For any questions or concerns regarding our privacy policy, please contact us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;