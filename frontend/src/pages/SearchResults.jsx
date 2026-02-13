// src/pages/SearchResults.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Filter, Star, MapPin, ChevronDown, ChevronUp, Check, ArrowLeft, Wifi, Car, Coffee, Users, Tv, Wind, Utensils, Dumbbell, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import { hotelsData } from "../assets/assets";

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = location.state || {};

    const [priceRange, setPriceRange] = useState([580, 20000]);
    const [showMoreLocations, setShowMoreLocations] = useState(false);
    const [showMoreCollections, setShowMoreCollections] = useState(false);
    const [showMoreCategories, setShowMoreCategories] = useState(false);
    const [showMoreFacilities, setShowMoreFacilities] = useState(false);
    const [wizardMemberOnly, setWizardMemberOnly] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        collections: [],
        categories: [],
        facilities: [],
        accommodationTypes: [],
        checkinFeatures: []
    });

    // State to track current image index for each hotel
    const [hotelImagesIndex, setHotelImagesIndex] = useState({});
    
    // Refs for interval timers for each hotel
    const intervalRefs = useRef({});

    // Enhanced mock hotel data
    const hotels = hotelsData;

    // Filter locations data
    const popularLocations = [
        "Shivaji Nagar", "Pimpri Chinchwad", "Hinjewadi", "Viman Nagar", "Baner",
        "Hadapsar", "Kharadi", "Wakad", "Swargate", "Katraj", "Koregaon Park",
        "Deccan Gymkhana", "Lavasa City", "Karve Nagar", "Balewadi", "Kalyani Nagar",
        "Chandan Nagar", "Narhe", "Keshav Nagar"
    ];

    const visibleLocations = showMoreLocations ? popularLocations : popularLocations.slice(0, 5);

    // Collections data
    const collections = [
        { id: 'family-stay', label: 'Family STAYs', count: 19 },
        { id: 'neighborhood', label: 'Your friendly neighbourhood stay', count: 12 },
        { id: 'group-travel', label: 'For Group Travellers', count: 5 },
        { id: 'local-ids', label: 'Local IDs accepted', count: 47 },
        { id: 'couples', label: 'STAY welcomes couples', count: 79 },
        { id: 'next-level', label: 'Walk into next-level living', count: 3 },
        { id: 'stay-recommended', label: 'STAY Recommended', count: 1 }
    ];

    const visibleCollections = showMoreCollections ? collections : collections.slice(0, 5);

    // Categories data
    const categories = [
        {
            id: 'stay-rooms',
            label: 'STAY Rooms',
            description: 'Super affordable stays with essential amenities'
        },
        {
            id: 'stay-townhouse',
            label: 'STAY Townhouse',
            description: 'Your friendly, premium neighbourhood hotel- Serviced by STAY'
        },
        {
            id: 'stay-flagship',
            label: 'STAY Flagship',
            description: 'Affordable hotels at Prime locations- Serviced by STAY'
        },
        {
            id: 'stay-capital',
            label: 'Capital STAY',
            description: 'Premium hotels with spacious rooms for business travellers & families'
        },
        {
            id: 'stay-collection',
            label: 'Collection STAY',
            description: 'A space for new-age travellers - Serviced by STAY'
        }
    ];

    const visibleCategories = showMoreCategories ? categories : categories.slice(0, 3);

    // Facilities data
    const facilities = [
        { id: 'seating-area', label: 'Seating area', icon: '🛋️' },
        { id: 'balcony', label: 'Balcony', icon: '🌅' },
        { id: 'queen-bed', label: 'Queen Sized Bed', icon: '🛏️' },
        { id: 'tv', label: 'TV', icon: '📺' },
        { id: 'hair-dryer', label: 'Hair Dryer', icon: '💇' },
        { id: 'wifi', label: 'Free WiFi', icon: '📶' },
        { id: 'ac', label: 'AC', icon: '❄️' },
        { id: 'parking', label: 'Parking', icon: '🅿️' }
    ];

    const visibleFacilities = showMoreFacilities ? facilities : facilities.slice(0, 5);

    // Amenity icons mapping
    const amenityIcons = {
        'Free WiFi': <Wifi className="w-4 h-4" />,
        'Parking': <Car className="w-4 h-4" />,
        'Breakfast': <Coffee className="w-4 h-4" />,
        'Swimming Pool': '🏊',
        'Gym': <Dumbbell className="w-4 h-4" />,
        'Spa': '💆',
        'Restaurant': <Utensils className="w-4 h-4" />,
        'Elevator': '🛗',
        'AC': <Wind className="w-4 h-4" />,
        'TV': <Tv className="w-4 h-4" />,
        'Conference Room': '💼',
        'Bar': '🍸',
        'Beach Access': '🏖️',
        'Heritage View': '🏰',
        'Mountain View': '⛰️',
        'River View': '🌊',
        'Private Beach': '🏝️',
        'Fireplace': '🔥',
        'Yoga Classes': '🧘',
        'Adventure Sports': '🧗',
        'Indoor Games': '🎮',
        'Cultural Shows': '🎭',
        'Ayurveda Spa': '💆‍♀️',
        'Workspace': '💻',
        'Kitchenette': '🍳',
        'Meditation Hall': '🕉️'
    };

    // Start auto slide for a specific hotel
    const startAutoSlide = (hotelId, imagesLength) => {
        if (intervalRefs.current[hotelId]) {
            clearInterval(intervalRefs.current[hotelId]);
        }
        
        intervalRefs.current[hotelId] = setInterval(() => {
            setHotelImagesIndex(prev => ({
                ...prev,
                [hotelId]: (prev[hotelId] + 1) % imagesLength
            }));
        }, 5000); // Change image every 5 seconds
    };

    // Stop auto slide for a specific hotel
    const stopAutoSlide = (hotelId) => {
        if (intervalRefs.current[hotelId]) {
            clearInterval(intervalRefs.current[hotelId]);
            intervalRefs.current[hotelId] = null;
        }
    };

    // Handle image click for a specific hotel
    const handleImageSelect = (hotelId, imageIndex) => {
        setHotelImagesIndex(prev => ({
            ...prev,
            [hotelId]: imageIndex
        }));
        
        // Restart auto slide
        const hotel = hotels.find(h => h.id === hotelId);
        if (hotel && hotel.images && hotel.images.length > 1) {
            stopAutoSlide(hotelId);
            startAutoSlide(hotelId, hotel.images.length);
        }
    };

    // Handle next image for a specific hotel
    const handleNextImage = (hotelId, imagesLength) => {
        setHotelImagesIndex(prev => ({
            ...prev,
            [hotelId]: (prev[hotelId] + 1) % imagesLength
        }));
        
        // Restart auto slide
        stopAutoSlide(hotelId);
        startAutoSlide(hotelId, imagesLength);
    };

    // Handle previous image for a specific hotel
    const handlePrevImage = (hotelId, imagesLength) => {
        setHotelImagesIndex(prev => ({
            ...prev,
            [hotelId]: prev[hotelId] === 0 ? imagesLength - 1 : prev[hotelId] - 1
        }));
        
        // Restart auto slide
        stopAutoSlide(hotelId);
        startAutoSlide(hotelId, imagesLength);
    };

    // Initialize image indices for all hotels
    useEffect(() => {
        const initialIndices = {};
        hotels.forEach(hotel => {
            if (hotel.images && hotel.images.length > 0) {
                initialIndices[hotel.id] = 0;
            }
        });
        setHotelImagesIndex(initialIndices);

        // Start auto slides for all hotels with images
        hotels.forEach(hotel => {
            if (hotel.images && hotel.images.length > 1) {
                startAutoSlide(hotel.id, hotel.images.length);
            }
        });

        // Cleanup on unmount
        return () => {
            Object.keys(intervalRefs.current).forEach(hotelId => {
                if (intervalRefs.current[hotelId]) {
                    clearInterval(intervalRefs.current[hotelId]);
                }
            });
        };
    }, []);

    const handleFilterChange = (filterType, id) => {
        setSelectedFilters(prev => {
            const currentFilters = [...prev[filterType]];
            if (currentFilters.includes(id)) {
                return {
                    ...prev,
                    [filterType]: currentFilters.filter(item => item !== id)
                };
            } else {
                return {
                    ...prev,
                    [filterType]: [...currentFilters, id]
                };
            }
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    const renderHotelCard = (hotel) => {
        const currentImageIndex = hotelImagesIndex[hotel.id] || 0;
        const currentImage = hotel.images && hotel.images[currentImageIndex] ? hotel.images[currentImageIndex] : hotel.image;

        return (
            <div key={hotel.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow mb-6">
                <div className="flex flex-col lg:flex-row">
                    {/* Hotel Images - Left Section */}
                    <div className="lg:w-2/5">
                        <div className="relative">
                            {/* Main Image with Auto Slide */}
                            <div 
                                className="relative h-64 lg:h-full group cursor-pointer"
                                onMouseEnter={() => hotel.images && hotel.images.length > 1 && stopAutoSlide(hotel.id)}
                                onMouseLeave={() => hotel.images && hotel.images.length > 1 && startAutoSlide(hotel.id, hotel.images.length)}
                                onClick={() => navigate(`/hotel/${hotel.id}`)} // Click to view details
                            >
                                <img
                                    src={currentImage}
                                    alt={hotel.name}
                                    className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none transition-opacity duration-500"
                                />

                                {/* Navigation Arrows */}
                                {hotel.images && hotel.images.length > 1 && (
                                    <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePrevImage(hotel.id, hotel.images.length);
                                            }}
                                            className="p-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow-lg"
                                        >
                                            <ChevronLeft className="w-4 h-4 text-gray-800" />
                                        </button>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNextImage(hotel.id, hotel.images.length);
                                            }}
                                            className="p-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow-lg"
                                        >
                                            <ChevronRight className="w-4 h-4 text-gray-800" />
                                        </button>
                                    </div>
                                )}

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-col gap-2">
                                    {hotel.isWizardMember && (
                                        <div className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full inline-block">
                                            WIZARD
                                        </div>
                                    )}
                                    {hotel.companyServiced && (
                                        <div className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-full inline-block">
                                            Company-Serviced
                                        </div>
                                    )}
                                </div>

                                {/* Discount Badge */}
                                <div className="absolute top-3 right-3">
                                    <div className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg shadow-lg">
                                        {hotel.discount}
                                    </div>
                                </div>

                                {/* Image Count and Indicator */}
                                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                    <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                                        {hotel.images.length} photos
                                    </div>
                                    {hotel.images && hotel.images.length > 1 && (
                                        <div className="flex space-x-1">
                                            {hotel.images.slice(0, 3).map((_, index) => (
                                                <div 
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                                                />
                                            ))}
                                            {hotel.images.length > 3 && (
                                                <div className="text-white text-xs">+{hotel.images.length - 3}</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Thumbnail Images - Hidden on mobile */}
                            <div className="hidden lg:grid grid-cols-5 gap-1 p-2">
                                {hotel.images.slice(0, 5).map((img, idx) => (
                                    <div 
                                        key={idx} 
                                        className="h-16 overflow-hidden rounded cursor-pointer hover:opacity-100 opacity-90"
                                        onClick={() => handleImageSelect(hotel.id, idx)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${hotel.name} ${idx + 1}`}
                                            className={`w-full h-full object-cover ${idx === currentImageIndex ? 'ring-2 ring-red-500' : ''}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hotel Details - Right Section */}
                    <div className="lg:w-3/5 p-4 lg:p-6">
                        <div className="flex flex-col lg:flex-row lg:justify-between">
                            {/* Left Column - Hotel Info */}
                            <div className="flex-1 lg:pr-6">
                                {/* Hotel Name and Address - Clickable */}
                                <div className="mb-3 cursor-pointer" onClick={() => navigate(`/hotel/${hotel.id}`)}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-red-600 cursor-pointer">
                                        {hotel.name}
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="truncate" title={hotel.address}>
                                            {hotel.address}
                                        </span>
                                    </div>

                                    {/* Category Tag */}
                                    <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded mb-3">
                                        {hotel.category}
                                    </div>
                                </div>

                                {/* Rating and Reviews */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="ml-1 font-bold">{hotel.rating}</span>
                                    </div>
                                    <span className="text-gray-600 text-sm">
                                        ({hotel.reviews.toLocaleString()} Ratings)
                                    </span>
                                    <span className="text-gray-400">·</span>
                                    <span className="text-green-600 text-sm font-medium">
                                        Excellent
                                    </span>
                                </div>

                                {/* Urgency Message */}
                                <div className="flex items-center gap-2 mb-4 p-2 bg-orange-50 rounded-lg">
                                    <div className="text-orange-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 9 12">
                                            <path d="M7.96 5.67a.62.62 0 0 0-.52.1c-.1.06-.16.17-.2.27a6.5 6.5 0 0 1-1.2 1.54c-.39.32-.95.3-1.27-.04-.29-.29-.17-.75.12-1.05.32-.32.58-.77.8-1.26.33-.96.13-1.87-.53-2.55-.66-.69-1.63-.96-2.58-.66-1.06.33-1.82 1.2-2.1 2.3-.1.4-.04.82.17 1.17.2.34.54.6.94.7.8.2 1.35.8 1.35 1.63 0 .9-.73 1.63-1.63 1.63H.62a.62.62 0 0 0 0 1.24h5.73c1.58 0 2.86-1.28 2.86-2.86 0-1.2-.73-2.28-1.85-2.73z" />
                                        </svg>
                                    </div>
                                    <span className="text-orange-700 text-sm">
                                        {hotel.urgencyText}
                                    </span>
                                </div>

                                {/* Amenities */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                <span className="text-gray-500">
                                                    {amenityIcons[amenity] || '🏨'}
                                                </span>
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                        {hotel.amenities.length > 4 && (
                                            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                <span>+ {hotel.amenities.length - 4} more</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Price and Booking */}
                            <div className="border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6 lg:w-64">
                                <div className="text-right lg:text-left">
                                    {/* Price Info */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-end lg:justify-start mb-1">
                                            <span className="text-2xl font-bold text-gray-900">
                                                ₹{hotel.price.toLocaleString()}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                ₹{hotel.originalPrice.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            + ₹{hotel.taxes} taxes & fees
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            per room per night
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => navigate(`/booking/${hotel.id}`)}
                                            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                                        >
                                            Book Now
                                        </button>
                                        <button
                                            onClick={() => navigate(`/hotel/${hotel.id}`)}
                                            className="w-full py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                                        >
                                            View Details
                                        </button>
                                    </div>

                                    {/* Wizard Discount */}
                                    {hotel.isWizardMember && (
                                        <div className="mt-3 text-xs text-purple-600 font-medium bg-purple-50 p-2 rounded-lg">
                                            🎯 5% Wizard discount applied
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Search Bar Fixed at top */}
            <div className="sticky top-0 z-40 bg-white shadow-md py-3 px-0 lg:px-4">
                <div className="w-full px-4 lg:px-0 lg:max-w-7xl lg:mx-auto">
                    <div className="flex items-center justify-between gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="text-gray-600 hover:text-gray-800 flex items-center"
                        >
                            <ArrowLeft className="w-5 h-5 mr-1" />
                            <span className="hidden sm:inline">Back</span>
                        </button>

                        <div className="flex-1 max-w-2xl">
                            <div className="bg-gray-100 rounded-lg px-4 py-3">
                                <span className="text-gray-700 font-medium">
                                    {searchParams.location || 'All Localities'} •
                                    {searchParams.checkIn ? formatDate(searchParams.checkIn) : 'Check-in'} -
                                    {searchParams.checkOut ? formatDate(searchParams.checkOut) : 'Check-out'} •
                                    {searchParams.guests || 1} Guest{searchParams.guests > 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                            <Filter className="w-4 h-4" />
                            <span className="hidden sm:inline">Filters</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content - Full Width Container */}
            <div className="w-full px-0 lg:px-4">
                <div className="lg:max-w-8xl lg:mx-auto">
                    {/* Results Summary */}
                    <div className="pb-6">
                    </div>

                    {/* Filters and Results Layout */}
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Sidebar - Filters */}
                        <div className="lg:w-1/4 px-4 lg:px-0 lg:pr-6 mb-6 lg:mb-0">
                            <div className="bg-white rounded-xl shadow-sm p-6 lg:sticky lg:top-24 space-y-8 max-h-[calc(100vh-120px)] overflow-y-auto">
                                <div className="filters__header">
                                    <div className="filters__heading">
                                        <span className="text-xl font-bold text-gray-900">Filters</span>
                                    </div>
                                </div>

                                {/* Popular Locations Filter */}
                                <div className="filters__item">
                                    <section>
                                        <h4 className="font-semibold text-gray-800 mb-4">
                                            Popular locations
                                        </h4>
                                        <div className="mb-4">
                                            <div className="autocomplete__wrapper">
                                                <input
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                                    type="text"
                                                    placeholder="Search location..."
                                                />
                                            </div>
                                        </div>
                                        <div className="TileGroup">
                                            <div className="TileGroupWrapper grid grid-cols-2 gap-2 mb-4">
                                                {visibleLocations.map((location, index) => (
                                                    <div
                                                        key={index}
                                                        className="Tile px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-red-500 hover:bg-red-50 cursor-pointer transition-colors"
                                                    >
                                                        {location}
                                                    </div>
                                                ))}
                                            </div>
                                            {popularLocations.length > 5 && (
                                                <span
                                                    tabIndex="0"
                                                    role="button"
                                                    className="TileGroup__viewMore text-red-600 hover:text-red-800 font-medium text-sm cursor-pointer flex items-center gap-1"
                                                    onClick={() => setShowMoreLocations(!showMoreLocations)}
                                                >
                                                    {showMoreLocations ? (
                                                        <>
                                                            <ChevronUp className="w-4 h-4" />
                                                            View Less
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ChevronDown className="w-4 h-4" />
                                                            + View More
                                                        </>
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    </section>
                                </div>

                                {/* Price Range Filter */}
                                <div className="filters__item">
                                    <div className="rangepicker">
                                        <h4 className="font-semibold text-gray-800 mb-4">Price</h4>
                                        <div className="mb-2">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                                                <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="580"
                                                max="20000"
                                                step="100"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Collections Filter */}
                                <div className="filters__item">
                                    <div className="checkBoxGroup">
                                        <h4 className="font-semibold text-gray-800 mb-4">Collections</h4>
                                        {visibleCollections.map((collection) => (
                                            <label
                                                key={collection.id}
                                                className="checkbox flex items-center gap-3 mb-3 cursor-pointer"
                                                htmlFor={collection.id}
                                            >
                                                <div className="relative">
                                                    <input
                                                        className="sr-only"
                                                        id={collection.id}
                                                        name={collection.id}
                                                        type="checkbox"
                                                        checked={selectedFilters.collections.includes(collection.id)}
                                                        onChange={() => handleFilterChange('collections', collection.id)}
                                                    />
                                                    <div className={`w-5 h-5 border rounded flex items-center justify-center ${selectedFilters.collections.includes(collection.id) ? 'bg-red-500 border-red-500' : 'border-gray-300'}`}>
                                                        {selectedFilters.collections.includes(collection.id) && (
                                                            <Check className="w-3 h-3 text-white" />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="checkbox__label flex-1">
                                                    <span className="text-gray-700">{collection.label}</span>
                                                    <span className="text-gray-500 text-sm ml-2">({collection.count})</span>
                                                </div>
                                            </label>
                                        ))}
                                        {collections.length > 5 && (
                                            <span
                                                tabIndex="0"
                                                role="button"
                                                className="checkBoxGroup__viewMore text-red-600 hover:text-red-800 font-medium text-sm cursor-pointer flex items-center gap-1 mt-2"
                                                onClick={() => setShowMoreCollections(!showMoreCollections)}
                                            >
                                                {showMoreCollections ? (
                                                    <>
                                                        <ChevronUp className="w-4 h-4" />
                                                        View Less
                                                    </>
                                                ) : (
                                                    <>
                                                        <ChevronDown className="w-4 h-4" />
                                                        + View More
                                                    </>
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Categories Filter */}
                                <div className="filters__item">
                                    <div className="checkBoxGroup">
                                        <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
                                        {visibleCategories.map((category) => (
                                            <label
                                                key={category.id}
                                                className="checkbox flex items-start gap-3 mb-3 cursor-pointer"
                                                htmlFor={`cat-${category.id}`}
                                            >
                                                <div className="relative mt-1">
                                                    <input
                                                        className="sr-only"
                                                        id={`cat-${category.id}`}
                                                        name={category.id}
                                                        type="checkbox"
                                                        checked={selectedFilters.categories.includes(category.id)}
                                                        onChange={() => handleFilterChange('categories', category.id)}
                                                    />
                                                    <div className={`w-5 h-5 border rounded flex items-center justify-center ${selectedFilters.categories.includes(category.id) ? 'bg-red-500 border-red-500' : 'border-gray-300'}`}>
                                                        {selectedFilters.categories.includes(category.id) && (
                                                            <Check className="w-3 h-3 text-white" />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="checkbox__label flex-1">
                                                    <div className="text-gray-800 font-medium">{category.label}</div>
                                                    <div className="text-gray-600 text-sm">{category.description}</div>
                                                </div>
                                            </label>
                                        ))}
                                        {categories.length > 3 && (
                                            <span
                                                tabIndex="0"
                                                role="button"
                                                className="checkBoxGroup__viewMore text-red-600 hover:text-red-800 font-medium text-sm cursor-pointer flex items-center gap-1 mt-2"
                                                onClick={() => setShowMoreCategories(!showMoreCategories)}
                                            >
                                                {showMoreCategories ? (
                                                    <>
                                                        <ChevronUp className="w-4 h-4" />
                                                        View Less
                                                    </>
                                                ) : (
                                                    <>
                                                        <ChevronDown className="w-4 h-4" />
                                                        + View More
                                                    </>
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Facilities Filter */}
                                <div className="filters__item">
                                    <div className="checkBoxGroup">
                                        <h4 className="font-semibold text-gray-800 mb-4">Hotel Facilities</h4>
                                        {visibleFacilities.map((facility) => (
                                            <label
                                                key={facility.id}
                                                className="checkbox flex items-center gap-3 mb-3 cursor-pointer"
                                                htmlFor={`fac-${facility.id}`}
                                            >
                                                <div className="relative">
                                                    <input
                                                        className="sr-only"
                                                        id={`fac-${facility.id}`}
                                                        name={facility.id}
                                                        type="checkbox"
                                                        checked={selectedFilters.facilities.includes(facility.id)}
                                                        onChange={() => handleFilterChange('facilities', facility.id)}
                                                    />
                                                    <div className={`w-5 h-5 border rounded flex items-center justify-center ${selectedFilters.facilities.includes(facility.id) ? 'bg-red-500 border-red-500' : 'border-gray-300'}`}>
                                                        {selectedFilters.facilities.includes(facility.id) && (
                                                            <Check className="w-3 h-3 text-white" />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="checkbox__label flex-1">
                                                    <span className="flex items-center gap-2">
                                                        <span>{facility.icon}</span>
                                                        <span className="text-gray-700">{facility.label}</span>
                                                    </span>
                                                </div>
                                            </label>
                                        ))}
                                        {facilities.length > 5 && (
                                            <span
                                                tabIndex="0"
                                                role="button"
                                                className="checkBoxGroup__viewMore text-red-600 hover:text-red-800 font-medium text-sm cursor-pointer flex items-center gap-1 mt-2"
                                                onClick={() => setShowMoreFacilities(!showMoreFacilities)}
                                            >
                                                {showMoreFacilities ? (
                                                    <>
                                                        <ChevronUp className="w-4 h-4" />
                                                        View Less
                                                    </>
                                                ) : (
                                                    <>
                                                        <ChevronDown className="w-4 h-4" />
                                                        + View More
                                                    </>
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Wizard Member Filter */}
                                <div className="filters__item">
                                    <div className="w-filter p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                                        <div className="w-filter-contentCont flex items-center gap-3 mb-3">
                                            <div className="w-icon-default w-filter-icon">
                                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">W</span>
                                                </div>
                                            </div>
                                            <div className="w-filter-content">
                                                <span className="w-filter-name font-semibold text-gray-900">Wizard Member STAYs</span>
                                                <span className="w-filter-desc text-sm text-gray-600">Get 5% off on member hotels</span>
                                            </div>
                                        </div>
                                        <button
                                            className="w-filter-btn w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                                            type="button"
                                            onClick={() => setWizardMemberOnly(!wizardMemberOnly)}
                                        >
                                            <div className="w-filter-btn-icon">
                                                <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                                                    {wizardMemberOnly && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                                </div>
                                            </div>
                                            <span className="w-filter-btn-text">
                                                {wizardMemberOnly ? 'Showing Wizard STAYs' : 'Show Only Wizard STAYs'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Hotel Listings - Full Width */}
                        <div className="lg:w-3/4 px-0 lg:px-0">
                            {/* Filter Summary */}
                            <div className="px-4 lg:px-0 mb-6">
                                <div className="bg-white rounded-xl shadow-sm p-4">
                                    <div className="flex flex-wrap gap-2">
                                        {wizardMemberOnly && (
                                            <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full flex items-center gap-1">
                                                Wizard Member Only
                                                <button onClick={() => setWizardMemberOnly(false)} className="ml-1 text-purple-500 hover:text-purple-700">
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {selectedFilters.collections.map(col => {
                                            const collection = collections.find(c => c.id === col);
                                            return collection ? (
                                                <span key={col} className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full flex items-center gap-1">
                                                    {collection.label}
                                                    <button onClick={() => handleFilterChange('collections', col)} className="ml-1 text-red-500 hover:text-red-700">
                                                        ×
                                                    </button>
                                                </span>
                                            ) : null;
                                        })}
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                            Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                                        </span>
                                        {(wizardMemberOnly || selectedFilters.collections.length > 0) && (
                                            <button
                                                onClick={() => {
                                                    setPriceRange([580, 20000]);
                                                    setSelectedFilters({
                                                        collections: [],
                                                        categories: [],
                                                        facilities: [],
                                                        accommodationTypes: [],
                                                        checkinFeatures: []
                                                    });
                                                    setWizardMemberOnly(false);
                                                }}
                                                className="px-3 py-1 text-red-600 hover:text-red-800 text-sm font-medium"
                                            >
                                                Clear all filters
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Hotel Listings */}
                            <div className="px-4 lg:px-0">
                                {hotels
                                    .filter(hotel => !wizardMemberOnly || hotel.isWizardMember)
                                    .filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1])
                                    .map(renderHotelCard)}
                            </div>

                            {/* No Results Message */}
                            {hotels.filter(hotel => !wizardMemberOnly || hotel.isWizardMember)
                                .filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]).length === 0 && (
                                    <div className="bg-white rounded-xl shadow-sm p-8 text-center mx-4 lg:mx-0">
                                        <div className="text-gray-400 mb-4">
                                            <Search className="w-16 h-16 mx-auto" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                                        <p className="text-gray-600 mb-6">
                                            Try adjusting your filters or search criteria to find more options.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setPriceRange([580, 4898]);
                                                setSelectedFilters({
                                                    collections: [],
                                                    categories: [],
                                                    facilities: [],
                                                    accommodationTypes: [],
                                                    checkinFeatures: []
                                                });
                                                setWizardMemberOnly(false);
                                            }}
                                            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
                                        >
                                            Reset All Filters
                                        </button>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;