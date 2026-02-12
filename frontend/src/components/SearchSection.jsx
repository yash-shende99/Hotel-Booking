// src/components/SearchSection.jsx
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Crosshair } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import DateRangePicker from './DateRangePicker';
import GuestRoomPicker from './GuestRoomPicker';

const SearchSection = () => {
  const navigate = useNavigate();
  const { searchData, updateSearchData } = useSearch();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showRecentSearch, setShowRecentSearch] = useState(false);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleSearch = () => {
    // Navigate to search results page
    navigate('/search', { 
      state: { 
        location: searchData.location,
        checkIn: searchData.checkIn.toISOString(),
        checkOut: searchData.checkOut.toISOString(),
        guests: searchData.guests,
        rooms: searchData.rooms
      }
    });
  };

  const handleDateSelect = (range) => {
    updateSearchData({
      checkIn: range.startDate,
      checkOut: range.endDate
    });
    setShowDatePicker(false);
  };

  const handleGuestRoomUpdate = (data) => {
    updateSearchData(data);
  };

  return (
    <div 
      className="w-full bg-cover bg-center py-8 px-4"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.oyoroomscdn.com/cmsMedia/c4dbdea0-498a-4aeb-bdd0-736557fbb06e.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Tagline */}
        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Over 174,000+ hotels and homes across 35+ countries
        </h1>

        {/* Search Widget */}
        <div className="bg-white rounded-xl shadow-xl p-1 mb-8">
          <div className="flex flex-col md:flex-row">
            
            {/* Location Search */}
            <div className="flex-1 p-2 border-r border-gray-100">
              <div className="relative">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchData.location}
                    onChange={(e) => updateSearchData({ location: e.target.value })}
                    onFocus={() => setShowRecentSearch(true)}
                    className="w-full pl-10 pr-24 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    placeholder="Search by city, hotel, or neighborhood"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <button
                      type="button"
                      className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Crosshair className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-700">Near me</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Range Picker */}
            <div className="flex-1 p-2 border-r border-gray-100 relative">
              <div 
                className="relative cursor-pointer"
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  setShowGuestPicker(false);
                }}
              >
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div className="pl-10 pr-4 py-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-800 font-semibold">
                      {formatDate(searchData.checkIn)}
                    </span>
                    <span className="text-gray-400">–</span>
                    <span className="text-gray-800 font-semibold">
                      {formatDate(searchData.checkOut)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Date Picker Dropdown */}
              {showDatePicker && (
                <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-2xl p-4">
                  <DateRangePicker
                    startDate={searchData.checkIn}
                    endDate={searchData.checkOut}
                    onSelect={handleDateSelect}
                    onClose={() => setShowDatePicker(false)}
                  />
                </div>
              )}
            </div>

            {/* Guest & Room Picker */}
            <div className="flex-1 p-2 border-r border-gray-100 relative">
              <div 
                className="relative cursor-pointer"
                onClick={() => {
                  setShowGuestPicker(!showGuestPicker);
                  setShowDatePicker(false);
                }}
              >
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <div className="pl-10 pr-4 py-3 hover:bg-gray-50 rounded-lg">
                  <div className="text-gray-800 font-semibold">
                    {searchData.rooms} Room{searchData.rooms > 1 ? 's' : ''}, {searchData.guests} Guest{searchData.guests > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* Guest Picker Dropdown */}
              {showGuestPicker && (
                <div className="absolute top-full right-0 mt-2 z-50 bg-white rounded-lg shadow-2xl p-4 min-w-[300px]">
                  <GuestRoomPicker
                    roomDetails={searchData.roomDetails}
                    onUpdate={handleGuestRoomUpdate}
                    onClose={() => setShowGuestPicker(false)}
                  />
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="p-2">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>

          </div>
        </div>

        {/* Recent Searches */}
        {showRecentSearch && searchData.location && (
          <div className="bg-white rounded-xl shadow-lg p-6 absolute top-full left-0 right-0 z-40">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Continue your search
            </h2>
            <div 
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              onClick={() => {
                updateSearchData({ location: 'All Localities' });
                setShowRecentSearch(false);
              }}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 font-medium">All Localities</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-600">
                  {formatDate(searchData.checkIn)} - {formatDate(searchData.checkOut)} | {searchData.guests} Guest{searchData.guests > 1 ? 's' : ''}
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Select
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;