// src/components/Testimonials.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
      comment: "STAY hotels never disappoint! The business facilities are top-notch and the service is impeccable.",
      stay: "STAY Business Hub, Mumbai"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Family Vacation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d5?w=200&h=200&fit=crop",
      rating: 5,
      comment: "Perfect family vacation! The kids loved the pool and the staff went above and beyond to make us comfortable.",
      stay: "STAY Beach Resort, Goa"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Honeymoon Trip",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 4,
      comment: "Romantic getaway made perfect! The candlelight dinner setup was magical.",
      stay: "STAY Heritage Palace, Udaipur"
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Solo Traveler",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
      comment: "As a solo female traveler, safety was my priority. STAY hotels provided excellent security and comfort.",
      stay: "STAY City Inn, Delhi"
    }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>CUSTOMER REVIEWS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join over 2 million satisfied customers who trust STAY for their travels
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">2M+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">180+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-red-100" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Stay Info */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Stayed at</div>
                <div className="font-semibold text-gray-900">{testimonial.stay}</div>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Google', 'Microsoft', 'Amazon', 'Flipkart', 'TCS', 'Infosys'].map((brand) => (
              <div key={brand} className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-xl font-bold text-gray-700">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;