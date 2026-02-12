// src/pages/BookingPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Star, Check, CreditCard, Shield,
  User, Calendar, Users, Lock, ChevronRight, AlertCircle
} from 'lucide-react';
import Header from '../components/Header';
import DateRangePicker from '../components/DateRangePicker';
import GuestRoomPicker from '../components/GuestRoomPicker';
import { hotelsData } from '../assets/assets'; // Correct import path

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedRoomId = searchParams.get('room') || 'classic'; // Default to classic

  const [bookingStep, setBookingStep] = useState(1); 
  const [guestDetails, setGuestDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [dates, setDates] = useState({
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 86400000),
  });
  const [guestCount, setGuestCount] = useState({
    adults: 1,
    children: 0,
    rooms: 1
  });

  // Find hotel by ID
  const hotel = hotelsData.find(h => h.id === parseInt(id));
  
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

  // Find selected room
  const selectedRoomData = hotel.roomTypes.find(room => room.id === selectedRoomId) || hotel.roomTypes[0];
  
  // Calculate number of nights
  const nights = Math.ceil((dates.checkOut - dates.checkIn) / (1000 * 60 * 60 * 24));
  
  // Calculate totals based on selected room price
  const roomTotal = selectedRoomData.price * nights * guestCount.rooms;
  const taxes = Math.round(roomTotal * 0.18);
  
  // Extract discount percentage from string (e.g., "28% OFF" -> 28)
  const discountPercentage = parseFloat(hotel.discount.replace('% OFF', '').replace('% off', ''));
  const discountAmount = Math.round(roomTotal * discountPercentage / 100);
  const wizardDiscount = hotel.isWizardMember ? Math.round(roomTotal * 0.05) : 0;
  const total = roomTotal + taxes - discountAmount - wizardDiscount;

  const handleDateSelect = (range) => {
    setDates({
      checkIn: range.startDate,
      checkOut: range.endDate
    });
    setShowDatePicker(false);
  };

  const handleGuestUpdate = (data) => {
    setGuestCount({
      adults: data.guests,
      rooms: data.rooms,
      children: 0 // You can add children count logic
    });
    setShowGuestPicker(false);
  };

  const handleGuestDetailsChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitBooking = () => {
    // In real app, send booking data to backend
    console.log('Booking submitted:', {
      hotelId: id,
      hotelName: hotel.name,
      roomType: selectedRoomData.name,
      dates,
      guestCount,
      guestDetails,
      paymentMethod,
      total
    });
    
    alert('Booking Confirmed! Redirecting to confirmation...');
    // In real app, navigate to confirmation page
    // navigate(`/confirmation/${bookingId}`);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Progress Bar */}
      <div className="sticky top-0 z-30 bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Complete Your Booking</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className={`flex items-center ${bookingStep >= 1 ? 'text-red-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 1 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="ml-2 hidden sm:inline">Details</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <div className={`flex items-center ${bookingStep >= 2 ? 'text-red-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 2 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="ml-2 hidden sm:inline">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Guest Details */}
            {bookingStep === 1 && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Guest Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={guestDetails.firstName}
                      onChange={handleGuestDetailsChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={guestDetails.lastName}
                      onChange={handleGuestDetailsChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={guestDetails.email}
                      onChange={handleGuestDetailsChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={guestDetails.phone}
                      onChange={handleGuestDetailsChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={guestDetails.specialRequests}
                    onChange={handleGuestDetailsChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Any special requests or requirements"
                    rows="3"
                  />
                </div>

                {/* Stay Details */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in Date
                      </label>
                      <button
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                          <span>{formatDate(dates.checkIn)}</span>
                        </div>
                      </button>
                      {showDatePicker && (
                        <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-xl p-4">
                          <DateRangePicker
                            startDate={dates.checkIn}
                            endDate={dates.checkOut}
                            onSelect={handleDateSelect}
                            onClose={() => setShowDatePicker(false)}
                          />
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-out Date
                      </label>
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                          <span>{formatDate(dates.checkOut)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Guests & Rooms
                      </label>
                      <button
                        onClick={() => setShowGuestPicker(!showGuestPicker)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-gray-400 mr-2" />
                          <span>{guestCount.adults} Adult{guestCount.adults > 1 ? 's' : ''}, {guestCount.rooms} Room{guestCount.rooms > 1 ? 's' : ''}</span>
                        </div>
                      </button>
                      {showGuestPicker && (
                        <div className="absolute z-10 mt-2 right-0 bg-white rounded-lg shadow-xl p-4 min-w-[300px]">
                          <GuestRoomPicker
                            roomDetails={[{ adults: guestCount.adults, children: 0 }]}
                            onUpdate={handleGuestUpdate}
                            onClose={() => setShowGuestPicker(false)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setBookingStep(2)}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {bookingStep === 2 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-6">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-300">
                    <input
                      type="radio"
                      name="payment"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                      className="w-5 h-5 text-red-600"
                    />
                    <div className="ml-3">
                      <div className="flex items-center">
                        <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-medium">Credit/Debit Card</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Pay with your Visa, MasterCard, or other cards</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-300">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="w-5 h-5 text-red-600"
                    />
                    <div className="ml-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 text-white rounded flex items-center justify-center mr-2">UPI</div>
                        <span className="font-medium">UPI</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Pay using Google Pay, PhonePe, Paytm, etc.</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-300">
                    <input
                      type="radio"
                      name="payment"
                      value="netbanking"
                      checked={paymentMethod === 'netbanking'}
                      onChange={() => setPaymentMethod('netbanking')}
                      className="w-5 h-5 text-red-600"
                    />
                    <div className="ml-3">
                      <span className="font-medium">Net Banking</span>
                      <p className="text-sm text-gray-500 mt-1">Pay directly from your bank account</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-300">
                    <input
                      type="radio"
                      name="payment"
                      value="pay-at-hotel"
                      checked={paymentMethod === 'pay-at-hotel'}
                      onChange={() => setPaymentMethod('pay-at-hotel')}
                      className="w-5 h-5 text-red-600"
                    />
                    <div className="ml-3">
                      <span className="font-medium">Pay at Hotel</span>
                      <p className="text-sm text-gray-500 mt-1">Pay when you check-in at the hotel</p>
                    </div>
                  </label>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-800 font-medium">Free Cancellation</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        Cancel for free until 24 hours before check-in. No charges will be made until then.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setBookingStep(1)}
                    className="flex-1 py-4 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmitBooking}
                    className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Hotel Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={selectedRoomData.image || hotel.image}
                    alt={hotel.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{hotel.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="truncate">{hotel.address}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">({hotel.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">{selectedRoomData.name}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Check-in</span>
                      <span className="font-medium">{formatDate(dates.checkIn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out</span>
                      <span className="font-medium">{formatDate(dates.checkOut)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="font-medium">{nights} night{nights > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests</span>
                      <span className="font-medium">{guestCount.adults} Adult{guestCount.adults > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms</span>
                      <span className="font-medium">{guestCount.rooms} Room{guestCount.rooms > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-6">Price Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room ({nights} night{nights > 1 ? 's' : ''})</span>
                    <span className="font-medium">₹{roomTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & fees</span>
                    <span className="font-medium">₹{taxes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount ({hotel.discount})</span>
                    <span className="text-red-600 font-medium">-₹{discountAmount.toLocaleString()}</span>
                  </div>
                  {hotel.isWizardMember && (
                    <div className="flex justify-between text-purple-600">
                      <span>Wizard Member Discount</span>
                      <span className="font-medium">-₹{wizardDiscount.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        ₹{total.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 text-right">Inclusive of all taxes</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-700 font-medium">Free cancellation until {formatDate(new Date(dates.checkIn.getTime() - 86400000))}</span>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-blue-800 font-medium">Secure & Safe Booking</p>
                    <p className="text-xs text-blue-700 mt-1">
                      Your personal information is protected with 256-bit SSL encryption
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-600">
                  <Lock className="w-3 h-3" />
                  <span>🔒 Secure Connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;