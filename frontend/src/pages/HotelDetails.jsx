// src/pages/HotelDetails.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, MapPin, Star, Check, Wifi, Car, Coffee,
  Users, Tv, Wind, Utensils, Dumbbell, Shield,
  Calendar, Clock, CreditCard, Award, Heart,
  ChevronRight, ChevronDown, Share2, Camera, ChevronLeft
} from 'lucide-react';
import Header from '../components/Header';
import { hotelsData } from '../assets/assets';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [couponApplied, setCouponApplied] = useState(true);
  const [hotel, setHotel] = useState(null);
  const [selectedRoomData, setSelectedRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const slideIntervalRef = useRef(null);

  // Start automatic slideshow
  const startAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    
    slideIntervalRef.current = setInterval(() => {
      if (hotel && hotel.images && hotel.images.length > 0) {
        setSelectedImage(prev => (prev + 1) % hotel.images.length);
      }
    }, 3000); // Change image every 5 seconds
  };

  // Stop automatic slideshow
  const stopAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };

  // Handle manual image selection
  const handleImageSelect = (index) => {
    setSelectedImage(index);
    // Reset auto-slide timer
    if (isAutoSliding) {
      stopAutoSlide();
      startAutoSlide();
    }
  };

  // Handle next image
  const handleNextImage = () => {
    if (hotel && hotel.images && hotel.images.length > 0) {
      const nextIndex = (selectedImage + 1) % hotel.images.length;
      setSelectedImage(nextIndex);
      if (isAutoSliding) {
        stopAutoSlide();
        startAutoSlide();
      }
    }
  };

  // Handle previous image
  const handlePrevImage = () => {
    if (hotel && hotel.images && hotel.images.length > 0) {
      const prevIndex = selectedImage === 0 ? hotel.images.length - 1 : selectedImage - 1;
      setSelectedImage(prevIndex);
      if (isAutoSliding) {
        stopAutoSlide();
        startAutoSlide();
      }
    }
  };

  // Get room price
  const getRoomPrice = (room, hotel) => {
    const roomPrice = room.price;
    if (!roomPrice || isNaN(roomPrice) || roomPrice <= 0) {
      return Number(hotel.price) || 0;
    }
    return Number(roomPrice);
  };

  // Get room original price
  const getRoomOriginalPrice = (room, hotel) => {
    const originalPrice = room.originalPrice;
    if (!originalPrice || isNaN(originalPrice) || originalPrice <= 0) {
      const roomPrice = getRoomPrice(room, hotel);
      return Math.round(roomPrice * 1.5);
    }
    return Number(originalPrice);
  };

  // Calculate discount
  const calculateDiscount = (price, originalPrice) => {
    if (!originalPrice || originalPrice <= 0 || !price || price <= 0) {
      return '0% off';
    }
    const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
    return `${discountPercentage}% off`;
  };

  useEffect(() => {
    // Find hotel by ID
    const foundHotel = hotelsData.find(h => h.id === parseInt(id));

    if (foundHotel) {
      setHotel(foundHotel);

      // Set default selected room (first room)
      if (foundHotel.roomTypes && foundHotel.roomTypes.length > 0) {
        const defaultRoom = foundHotel.roomTypes[0];
        setSelectedRoom(defaultRoom.id);

        const roomData = {
          ...defaultRoom,
          price: Number(defaultRoom.price) || 0,
          originalPrice: Number(defaultRoom.originalPrice) || 0,
          discount: defaultRoom.discount || '0% off',
          image: defaultRoom.image || foundHotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        };

        setSelectedRoomData(roomData);
      } else {
        const defaultRoom = {
          id: 'default',
          name: 'Standard Room',
          description: 'Standard accommodation',
          price: Number(foundHotel.price) || 0,
          originalPrice: Number(foundHotel.originalPrice) || foundHotel.price * 1.5 || 0,
          discount: foundHotel.discount || '0% off',
          image: foundHotel.image,
          amenities: foundHotel.amenities || []
        };
        setSelectedRoom('default');
        setSelectedRoomData(defaultRoom);
      }
    }

    setLoading(false);
  }, [id]);

  // Start auto slide on component mount
  useEffect(() => {
    if (hotel && hotel.images && hotel.images.length > 1 && isAutoSliding) {
      startAutoSlide();
    }

    // Cleanup on unmount
    return () => {
      stopAutoSlide();
    };
  }, [hotel, isAutoSliding]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-xl text-gray-600">Loading hotel details...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hotel not found</h2>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle room selection
  const handleRoomSelect = (roomId) => {
    const room = hotel.roomTypes.find(r => r.id === roomId);
    if (room) {
      setSelectedRoom(roomId);
      const roomData = {
        ...room,
        price: getRoomPrice(room, hotel),
        originalPrice: getRoomOriginalPrice(room, hotel),
        discount: room.discount || calculateDiscount(getRoomPrice(room, hotel), getRoomOriginalPrice(room, hotel)),
        image: room.image || hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
      };
      setSelectedRoomData(roomData);
    }
  };

  // Fallback if selectedRoomData is still null
  if (!selectedRoomData && hotel.roomTypes && hotel.roomTypes.length > 0) {
    setSelectedRoomData(hotel.roomTypes[0]);
  }

  if (!selectedRoomData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">No room data available</h2>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const visibleAmenities = showAllAmenities ? hotel.amenities : (hotel.amenities || []).slice(0, 6);
  const visibleImages = showAllPhotos ? hotel.images : (hotel.images || []).slice(0, 6);

  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="sticky top-0 z-30 bg-white shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Search Results</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Image Gallery */}
        <div 
          className="relative h-96 md:h-[500px] overflow-hidden group"
          onMouseEnter={() => {
            setIsAutoSliding(false);
            stopAutoSlide();
          }}
          onMouseLeave={() => {
            setIsAutoSliding(true);
            startAutoSlide();
          }}
        >
          <div className="relative h-full">
            {/* Main Image with fade transition */}
            <img
              key={selectedImage}
              src={hotel.images && hotel.images[selectedImage] ? hotel.images[selectedImage] : hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'}
              alt={hotel.name}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />

            {/* Image Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button 
                onClick={handlePrevImage}
                className="p-3 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow-lg transition-all hover:scale-110 group-hover:opacity-100 opacity-0"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={handleNextImage}
                className="p-3 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow-lg transition-all hover:scale-110 group-hover:opacity-100 opacity-0"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Image Indicators (Dots) */}
            {hotel.images && hotel.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {hotel.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedImage 
                        ? 'bg-white w-8' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-100'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Image Thumbnails */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
              {visibleImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden transition-all transform hover:scale-105 ${
                    selectedImage === index 
                      ? 'ring-3 ring-red-500 ring-offset-2' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${hotel.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              {hotel.images && hotel.images.length > 6 && !showAllPhotos && (
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="flex-shrink-0 w-20 h-16 rounded bg-black bg-opacity-70 text-white flex items-center justify-center hover:bg-opacity-90 transition-all"
                >
                  <span className="text-sm">+{hotel.images.length - 6}</span>
                </button>
              )}
            </div>

          </div>

          {/* Image Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
              onClick={() => {
                // Share functionality
                if (navigator.share) {
                  navigator.share({
                    title: hotel.name,
                    text: `Check out ${hotel.name} on STAY`,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
              onClick={() => setShowAllPhotos(true)}
            >
              <Camera className="w-5 h-5" />
              <span className="ml-1 text-sm">View all photos</span>
            </button>
          </div>
        </div>

        {/* Hotel Info Header */}
        <div className="bg-white px-6 py-8">
          <div className="max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{hotel.location}</span>
                </div>

                {/* Rating and Reviews */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg mr-1">{hotel.rating}</span>
                      {renderStarRating(hotel.rating)}
                    </div>
                    <span className="ml-2 font-medium">({hotel.reviews} Ratings)</span>
                  </div>

                  {hotel.companyServiced && (
                    <div className="flex items-center text-orange-600">
                      <Heart className="w-5 h-5 fill-current mr-1" />
                      <span className="font-medium">Company Serviced</span>
                    </div>
                  )}

                  {/* Check-in Rating */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="text-gray-600 mr-2">
                        <svg className="w-4 h-6" viewBox="0 0 9 13" fill="none">
                          <path d="M9 12V12C4.58172 12 1 8.41828 1 4L1 0" stroke="#6F6F6F" />
                        </svg>
                      </div>
                      <div className="font-bold text-gray-900">{hotel.checkInRating}</div>
                      <div className="text-gray-600 mx-2">·</div>
                      <div className="text-gray-600">Check-in rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Summary - Desktop */}
              <div className="hidden md:block bg-gray-50 p-6 rounded-lg min-w-[280px]">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-3xl font-bold text-gray-900">₹{selectedRoomData.price}</span>
                    <span className="text-lg text-gray-500 line-through">₹{selectedRoomData.originalPrice}</span>
                  </div>
                  <div className="text-red-600 font-bold text-lg">{selectedRoomData.discount}</div>
                  <div className="text-gray-600 text-sm mt-1">+ taxes & fees: ₹{hotel.taxes || 0}</div>
                </div>

                <button
                  onClick={() => navigate(`/booking/${hotel.id}?room=${selectedRoom}`)}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors mb-4"
                >
                  Continue to Book
                </button>

                <div className="text-center text-sm text-gray-600">
                  By proceeding, you agree to our Guest Policies
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {visibleAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                      {/* You can add specific icons based on amenity type */}
                      {amenity === 'Free WiFi' && <Wifi className="w-5 h-5" />}
                      {amenity === 'Parking' && <Car className="w-5 h-5" />}
                      {amenity === 'Breakfast' && <Coffee className="w-5 h-5" />}
                      {amenity === 'Swimming Pool' && '🏊'}
                      {amenity === 'Gym' && <Dumbbell className="w-5 h-5" />}
                      {amenity === 'Spa' && '💆'}
                      {amenity === 'Restaurant' && <Utensils className="w-5 h-5" />}
                      {amenity === 'AC' && <Wind className="w-5 h-5" />}
                      {amenity === 'TV' && <Tv className="w-5 h-5" />}
                      {!['Free WiFi', 'Parking', 'Breakfast', 'Swimming Pool', 'Gym', 'Spa', 'Restaurant', 'AC', 'TV'].includes(amenity) && '🏨'}
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
              {hotel.amenities && hotel.amenities.length > 6 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-6 text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
                >
                  {showAllAmenities ? 'Show Less' : `Show More (${hotel.amenities.length - 6} more)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllAmenities ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            {/* About this STAY */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">About this STAY</h2>
              <div className="text-gray-600 whitespace-pre-line">
                {hotel.description}
              </div>
              <button className="mt-4 text-red-600 hover:text-red-800 font-medium">
                Read more
              </button>
            </div>

            {/* Choose Your Room */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Choose your room</h2>

              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">Selected Category</span>
                </div>
              </div>

              <div className="space-y-6">
                {hotel.roomTypes && hotel.roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`border rounded-xl p-6 ${room.id === selectedRoom ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Room Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
                            <p className="text-gray-600 text-sm">{room.description}</p>
                          </div>
                          {room.id === selectedRoom && (
                            <div className="flex items-center text-green-600">
                              <Check className="w-5 h-5" />
                              <span className="ml-1 font-medium">SELECTED</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {room.amenities && room.amenities.map((amenity, idx) => (
                            <div key={idx} className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {amenity}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between md:hidden">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">₹{room.price}</div>
                            <div className="text-sm text-gray-500 line-through">₹{room.originalPrice}</div>
                            <div className="text-red-600 font-semibold">{room.discount}</div>
                          </div>
                          <button
                            onClick={() => handleRoomSelect(room.id)}
                            className={`px-6 py-2 rounded-lg ${room.id === selectedRoom ? 'bg-red-600 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                          >
                            {room.id === selectedRoom ? 'SELECTED' : 'SELECT'}
                          </button>
                        </div>
                      </div>

                      {/* Room Price - Desktop */}
                      <div className="hidden md:flex flex-col items-end justify-between">
                        <div className="text-right">
                          <div className="text-3xl font-bold text-gray-900">₹{room.price}</div>
                          <div className="text-lg text-gray-500 line-through">₹{room.originalPrice}</div>
                          <div className="text-red-600 font-bold text-lg">{room.discount}</div>
                        </div>
                        <button
                          onClick={() => handleRoomSelect(room.id)}
                          className={`px-8 py-3 rounded-lg font-medium ${room.id === selectedRoom ? 'bg-red-600 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                        >
                          {room.id === selectedRoom ? 'SELECTED' : 'SELECT'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Policies */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Hotel policies</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-4">
                  <div>
                    <div className="text-gray-500 text-sm">Check-in</div>
                    <div className="font-semibold">{hotel.checkInTime}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Check-out</div>
                    <div className="font-semibold">{hotel.checkOutTime}</div>
                  </div>
                </li>
                {hotel.hotelPolicies && hotel.hotelPolicies.map((policy, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{policy}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-red-600 hover:text-red-800 font-medium">
                View Guest Policy
              </button>
            </div>

            {/* What's Nearby */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">What's nearby?</h2>
              <div className="space-y-4">
                {hotel.nearbyPlaces && hotel.nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-4">
                    <span className="text-gray-700">{place.name}</span>
                    <span className="text-gray-500">{place.distance}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Click here to view on map
              </button>
            </div>
          </div>

          {/* Right Column - Booking Summary (Desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              {/* Login Banner */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <span className="font-semibold">Login now to get upto 15% lower prices</span>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg">
                  Login
                </button>
              </div>

              {/* Price Details */}
              <div className="mb-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-4xl font-bold text-gray-900">₹{selectedRoomData.price}</span>
                    <span className="text-xl text-gray-500 line-through">₹{selectedRoomData.originalPrice}</span>
                  </div>
                  <div className="text-red-600 font-bold text-xl">{selectedRoomData.discount}</div>
                  <div className="text-gray-600 mt-1">+ taxes & fees: ₹{hotel.taxes || 0}</div>
                </div>

                {/* Room Type */}
                <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Tv className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{selectedRoomData.name}</span>
                  </div>
                  <button className="text-red-600 hover:text-red-800">
                    <svg className="w-5 h-5" viewBox="0 0 18 20" fill="none">
                      <path fill="#EE2A24" d="M17.215.785A2.663 2.663 0 0015.32 0a2.66 2.66 0 00-1.896.785l-11.49 11.49a.447.447 0 00-.104.165L.027 17.396a.45.45 0 00.578.577l4.956-1.802a.46.46 0 00.165-.105l11.49-11.49c.506-.506.784-1.18.784-1.896s-.278-1.39-.785-1.896z" />
                    </svg>
                  </button>
                </div>

                {/* Coupon Applied */}
                {couponApplied && (
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">BOOK1GET1 coupon applied</div>
                          <div className="text-sm text-yellow-700">More offers</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-600 font-bold">-₹{hotel.couponDiscount || 0}</div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={couponApplied}
                            onChange={() => setCouponApplied(!couponApplied)}
                            className="w-4 h-4 text-red-600"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <button
                  onClick={() => navigate(`/booking/${hotel.id}?room=${selectedRoom}`)}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition-colors mb-4"
                >
                  Continue to Book
                </button>

                {/* Policies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-gray-600 hover:text-gray-800 cursor-pointer">
                    <span>Cancellation Policy</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between text-gray-600 hover:text-gray-800 cursor-pointer">
                    <span>Follow safety measures advised at the hotel</span>
                  </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                  <span>By proceeding, you agree to our </span>
                  <a href="#" className="text-red-600 hover:text-red-800">Guest Policies.</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Booking Summary - Fixed Bottom */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹{selectedRoomData.price}</span>
                  <span className="text-gray-500 line-through">₹{selectedRoomData.originalPrice}</span>
                </div>
                <div className="text-red-600 font-bold">{selectedRoomData.discount}</div>
              </div>
              <button
                onClick={() => navigate(`/booking/${hotel.id}?room=${selectedRoom}`)}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
              >
                Continue to Book
              </button>
            </div>
            <div className="text-sm text-gray-500 text-center">
              + taxes & fees: ₹{hotel.taxes || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;