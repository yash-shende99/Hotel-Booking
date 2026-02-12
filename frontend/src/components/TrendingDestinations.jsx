// src/components/TrendingDestinations.jsx
import React from 'react';
import { MapPin, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TrendingDestinations = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      hotels: 450,
      startingPrice: "₹1,299",
      description: "Beach paradise with vibrant nightlife",
      trending: true
    },
    {
      id: 2,
      name: "Manali",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      hotels: 320,
      startingPrice: "₹999",
      description: "Snowy mountains & adventure sports",
      trending: true
    },
    {
      id: 3,
      name: "Udaipur",
      image: "https://images.unsplash.com/photo-1578946956088-940c3b502864?w=800&h=600&fit=crop",
      hotels: 280,
      startingPrice: "₹1,599",
      description: "City of lakes & royal palaces",
      trending: false
    },
    {
      id: 4,
      name: "Rishikesh",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      hotels: 190,
      startingPrice: "₹899",
      description: "Yoga capital & river rafting",
      trending: true
    },
    {
      id: 5,
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&h=600&fit=crop",
      hotels: 1250,
      startingPrice: "₹1,799",
      description: "City of dreams & Bollywood",
      trending: false
    },
    {
      id: 6,
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop",
      hotels: 380,
      startingPrice: "₹1,499",
      description: "Backwaters & Ayurvedic retreats",
      trending: true
    }
  ];

  const handleDestinationClick = (destination) => {
    navigate(`/search?location=${destination.name}`);
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <span className="text-red-600 font-semibold">TRENDING NOW</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Popular Destinations
            </h2>
            <p className="text-gray-600 mt-2">
              Most searched destinations this month
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              View All Destinations
            </button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              onClick={() => handleDestinationClick(destination)}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Trending Badge */}
                {destination.trending && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    TRENDING
                  </div>
                )}
                
                {/* Location Name */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white">
                    <MapPin className="w-5 h-5 mr-2" />
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-white text-sm mt-1">{destination.description}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600">
                        {destination.hotels}+ Hotels
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {destination.startingPrice}
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors">
                  Explore Hotels
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;