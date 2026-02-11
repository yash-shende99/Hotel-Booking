// src/components/HotelsCarousel.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Wifi, Car, Coffee, Wind, Tv, Heart, Check } from 'lucide-react';

const HotelsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});

  // Professional hotel data
  const hotels = [
    {
      id: 1,
      name: "STAY Grand Hotel",
      location: "Marine Drive, Mumbai",
      rating: 4.8,
      reviews: 2356,
      price: 8999,
      originalPrice: 12999,
      discount: '30% OFF',
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      amenities: ['Sea View', 'Free WiFi', 'Swimming Pool', 'Spa', 'Fine Dining'],
      category: 'Luxury',
      isWizardMember: true,
      badge: 'Premium'
    },
    {
      id: 2,
      name: "STAY Business Hub",
      location: "Bandra Kurla Complex, Mumbai",
      rating: 4.6,
      reviews: 1872,
      price: 6499,
      originalPrice: 8999,
      discount: '28% OFF',
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
      amenities: ['Conference Room', 'Free WiFi', 'Gym', 'Business Center', 'Parking'],
      category: 'Business',
      isWizardMember: true,
      badge: 'Corporate'
    },
    {
      id: 3,
      name: "STAY Beach Resort",
      location: "Goa Beachfront",
      rating: 4.9,
      reviews: 3210,
      price: 12999,
      originalPrice: 18999,
      discount: '32% OFF',
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      amenities: ['Beach Access', 'Spa', 'Pool Bar', 'Water Sports', 'Kids Club'],
      category: 'Resort',
      isWizardMember: false,
      badge: 'Popular'
    },
    {
      id: 4,
      name: "STAY City Inn",
      location: "Connaught Place, Delhi",
      rating: 4.4,
      reviews: 1567,
      price: 4999,
      originalPrice: 6999,
      discount: '29% OFF',
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
      amenities: ['City View', 'Free WiFi', 'Restaurant', 'Fitness Center', '24/7 Room Service'],
      category: 'City',
      isWizardMember: true,
      badge: 'Trending'
    },
    {
      id: 5,
      name: "STAY Heritage Palace",
      location: "Udaipur, Rajasthan",
      rating: 4.7,
      reviews: 2890,
      price: 15999,
      originalPrice: 22999,
      discount: '31% OFF',
      image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&h=600&fit=crop",
      amenities: ['Lake View', 'Heritage', 'Fine Dining', 'Cultural Shows', 'Spa'],
      category: 'Heritage',
      isWizardMember: false,
      badge: 'Luxury'
    },
    {
      id: 6,
      name: "STAY Mountain Retreat",
      location: "Shimla, Himachal",
      rating: 4.5,
      reviews: 1345,
      price: 7499,
      originalPrice: 10999,
      discount: '32% OFF',
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      amenities: ['Mountain View', 'Fireplace', 'Adventure Sports', 'Spa', 'Local Cuisine'],
      category: 'Mountain',
      isWizardMember: true,
      badge: 'Scenic'
    }
  ];

  const handleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === hotels.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? hotels.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate visible hotels based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1280) return 4; // xl screens
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2; // md screens
    return 1; // mobile
  };

  const visibleCount = getVisibleCount();
  const visibleHotels = hotels.slice(currentIndex, currentIndex + visibleCount);

  // If we reach the end, wrap around
  if (visibleHotels.length < visibleCount) {
    visibleHotels.push(...hotels.slice(0, visibleCount - visibleHotels.length));
  }

  return (
    <div className="w-full py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>PREMIUM SELECTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Finest Hotels
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience luxury, comfort, and exceptional service at our handpicked collection of premium hotels
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Featured Properties</h3>
            <p className="text-gray-500">Curated by our travel experts</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-sm transition-all hover:shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {hotels.slice(0, Math.ceil(hotels.length / visibleCount)).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * visibleCount)}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === index * visibleCount ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-sm transition-all hover:shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Hotels Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out">
            {visibleHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  {/* Hotel Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {hotel.badge && (
                        <span className="px-3 py-1 bg-white text-gray-800 text-xs font-bold rounded-full shadow-md">
                          {hotel.badge}
                        </span>
                      )}
                      {hotel.isWizardMember && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-md">
                          WIZARD
                        </span>
                      )}
                    </div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg shadow-xl">
                        {hotel.discount}
                      </div>
                    </div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => handleFavorite(hotel.id)}
                      className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites[hotel.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </button>
                  </div>

                  {/* Hotel Details */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {hotel.category}
                      </span>
                    </div>

                    {/* Name and Location */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm truncate">{hotel.location}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="font-bold">{hotel.rating}</span>
                        </div>
                        <span className="ml-2 text-gray-600 text-sm">
                          ({hotel.reviews.toLocaleString()} reviews)
                        </span>
                      </div>
                      <span className="text-green-600 text-sm font-medium">
                        Excellent
                      </span>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.slice(0, 3).map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            <Check className="w-3 h-3 text-green-500" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            <span>+{hotel.amenities.length - 3} more</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ₹{hotel.price.toLocaleString()}
                          </span>
                          <span className="text-gray-500 line-through">
                            ₹{hotel.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          per night
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all hover:shadow-md">
            <span>View All Premium Hotels</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Premium Quality</h4>
            <p className="text-gray-600 text-sm">Curated selection of highest-rated hotels</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Verified Amenities</h4>
            <p className="text-gray-600 text-sm">All facilities verified and regularly inspected</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Best Price Guarantee</h4>
            <p className="text-gray-600 text-sm">Find a lower price? We'll match it</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Round-the-clock customer assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;