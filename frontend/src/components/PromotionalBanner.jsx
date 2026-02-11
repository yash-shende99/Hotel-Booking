// src/components/PromotionalBanner.jsx
import React from 'react';
import { Award, Shield, Tag, Zap } from 'lucide-react';

const PromotionalBanner = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "STAY Safe & Hygienic",
      description: "All properties follow strict hygiene protocols"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Price Guarantee",
      description: "Find a lower price? We'll match it"
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Exclusive Discounts",
      description: "Upto 60% off on premium hotels"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Confirmation",
      description: "Get booking confirmation within minutes"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;