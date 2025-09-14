import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, CreditCard, RefreshCw, AlertTriangle, Users, Edit, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald rounded-full mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Important Notice */}
          <Card className="bg-yellow-50 border-yellow-200 dark:bg-yellow-900/10 dark:border-yellow-800">
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <Info className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl text-yellow-700 dark:text-yellow-400">Important Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-800 dark:text-yellow-300">
                Before using this website, please take the time to carefully read these terms and conditions. 
                By using or accessing this website, you accept these terms and conditions as binding on you. 
                If you disagree with any of these terms and conditions, you shouldn't use this website.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Intellectual Property</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The material, pictures, logos, photos, and software that make up this website are all the 
                property of our business and are all covered by copyright laws.
              </p>
            </CardContent>
          </Card>

          {/* Website Usage */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Website Usage</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using this website, you agree to comply with all applicable laws and regulations. 
                Unauthorized and illegal use of this website is strictly prohibited. You are not permitted to 
                engage in activities that may harm, disable, or interfere with the proper functioning of the 
                website or hinder others from using it.
              </p>
            </CardContent>
          </Card>

          {/* Product Descriptions */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Product Descriptions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We make every effort to provide accurate and current information on our website. However, 
                we cannot guarantee the accuracy, completeness, or timeliness of the materials displayed. 
                The information on the website may be modified or updated without prior notice.
              </p>
            </CardContent>
          </Card>

          {/* Orders and Payment */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Orders and Payment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to accept or decline any order placed through our website. We may 
                reject or cancel an order at our discretion, without providing a reason, at any time. 
                Payment for all orders must be made through the approved payment methods available on our website.
              </p>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <RefreshCw className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Returns and Refunds</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our return policy states that there won't be any return or refund on any product or 
                services ordered or booked.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Limitation of Liability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We shall not be held liable for any damages arising from the use of our website or the 
                products offered, including but not limited to direct, indirect, incidental, punitive, 
                or consequential damages.
              </p>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Indemnification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By using our website, you agree to indemnify and defend our company, its officers, 
                directors, employees, and agents from any claims, damages, expenses, or losses resulting 
                from your use of the website or any violation of these terms and conditions.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <Edit className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">Changes to Terms and Conditions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms and conditions without prior notice. By 
                continuing to use our website, you accept any amendments made. For any questions or 
                concerns regarding our terms and conditions, please contact us.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-emerald/5 border-emerald/20">
            <CardHeader>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <Info className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl text-emerald">Contact Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For any questions or concerns regarding our terms and conditions, please contact us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;