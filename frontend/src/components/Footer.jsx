// src/components/Footer.jsx
import React from 'react';
import { Building, Facebook, Instagram, Twitter, Youtube, Apple, Play } from 'lucide-react';

const Footer = () => {
  const destinations = [
    "Hotels near me", "Hotels in Goa", "Hotels in Puri", "Hotels in Mahabaleshwar",
    "Hotels in Jaipur", "Hotels in Shimla", "Hotels in Manali", "Hotels in Udaipur",
    "Hotels in Mussoorie", "Hotels in Pondicherry", "Hotels in Delhi", "Hotels in Mumbai",
    "Hotels in Nainital", "Hotels in Lonavala", "Hotels in Munnar", "Hotels in Bangalore",
    "Hotels in Mysore", "Hotels in Darjeeling", "Hotels in Mount Abu", "Hotels in Kodaikanal",
    "Hotels in Hyderabad", "Premium Hotels",
    "Homes in Southern Europe", "Belvilla Holiday Homes", "Traum Vacation Apartments", "Traum Holiday Homes"
  ];

  const companyLinks = [
    { text: "About Us", href: "" },
    { text: "Teams / Careers", href: "" },
    { text: "Blogs", href: "" },
    { text: "Support", href: "" },
    { text: "Official STAY Blog", href: "" },
    { text: "Investor Relations", href: "" }
  ];

  const legalLinks = [
    { text: "Terms and conditions", href: "" },
    { text: "Guest Policies", href: "" },
    { text: "Privacy Policy", href: "" },
    { text: "Trust And Safety", href: "" },
    { text: "Cyber Security", href: "" },
    { text: "Cyber Security Awareness", href: "" },
    { text: "Responsible Disclosure", href: "" },
    { text: "Advertise your Homes", href: "" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/channel/UC1b6tyXZTHdIZ5vmgoAqn9w" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                STAY
              </div>
              <span className="text-gray-300 text-sm md:text-base">
                World's leading chain of hotels and homes
              </span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Join our network and grow your business!</span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Building className="w-4 h-4" />
                <span>List your property</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Links & Apps */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* App Downloads */}
            <div>
              <p className="text-gray-300 mb-4">Download STAY app for exciting offers.</p>
              <div className="flex flex-col gap-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
                >
                  <Apple className="w-6 h-6" />
                  <div>
                    <div className="text-sm">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
                >
                  <Play className="w-6 h-6" />
                  <div>
                    <div className="text-sm">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <div className="grid grid-cols-2 gap-2">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors py-1"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <div className="grid grid-cols-2 gap-2">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors py-1"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold mb-6">STAY Hotels</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {destinations.map((destination, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors py-1"
              >
                {destination}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Social & Copyright */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 STAY Hotels. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;