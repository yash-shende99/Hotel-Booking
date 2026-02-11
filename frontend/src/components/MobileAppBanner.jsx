// src/components/MobileAppBanner.jsx
import React from "react";
import { QrCode, Smartphone, Award, Download, Apple, Play } from "lucide-react";

const MobileAppBanner = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Easy Booking",
      description: "Book in less than 60 seconds",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exclusive App Deals",
      description: "Get 10% extra discount",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Offline Access",
      description: "Access bookings anytime",
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                <Smartphone className="w-4 h-4" />
                <span>MOBILE APP</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">Download the STAY App</h2>

              <p className="text-gray-300 text-lg mb-8">
                Get the best deals, exclusive offers, and manage all your bookings
                on the go. Available on both iOS and Android.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-xl transition-all hover:scale-105"
              >
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <Apple className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-xl transition-all hover:scale-105"
              >
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <Play className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - QR Code & Phone Mockup */}
          <div className="lg:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="relative mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-[3rem] opacity-20 blur-3xl" />

                <div className="relative bg-gray-900 rounded-[2.5rem] p-6 shadow-2xl">
                  {/* Phone frame */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                  <div className="bg-gray-800 rounded-[2rem] overflow-hidden border-4 border-gray-700">
                    {/* App screen with gradient background */}
                    <div className="h-80 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 p-6">
                      {/* App content */}
                      <div className="text-white">
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-2xl font-bold">STAY</div>
                          <div className="text-sm opacity-80">
                            Welcome back!
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="text-sm opacity-80 mb-1">
                            Your next trip
                          </div>
                          <div className="text-xl font-bold">
                            Goa Beach Resort
                          </div>
                          <div className="text-sm">Feb 15-20, 2024</div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                            <div className="text-xs opacity-80">Hotels</div>
                            <div className="font-bold">12</div>
                          </div>

                          <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                            <div className="text-xs opacity-80">Bookings</div>
                            <div className="font-bold">5</div>
                          </div>

                          <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                            <div className="text-xs opacity-80">Savings</div>
                            <div className="font-bold">₹2,450</div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-sm mb-2">
                            Tap to explore deals
                          </div>

                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 rounded-full font-semibold">
                            <Smartphone className="w-4 h-4" />
                            <span>Browse Hotels</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home button indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* QR Code - FIXED: Made QR code visible */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
                <div className="p-4 bg-white rounded-lg">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                    {/* FIX: Changed QR code to dark color so it's visible on light background */}
                    <QrCode className="w-24 h-24 text-gray-900 stroke-2" />
                  </div>
                </div>

                <div className="text-center mt-4">
                  <div className="text-gray-900 font-bold text-sm">
                    Scan to Download
                  </div>
                  <div className="text-gray-600 text-xs">
                    Use your phone camera
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBanner;