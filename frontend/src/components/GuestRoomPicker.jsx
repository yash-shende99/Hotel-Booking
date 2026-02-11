// src/components/GuestRoomPicker.jsx
import React from 'react';
import { Plus, Minus } from 'lucide-react';

const GuestRoomPicker = ({ roomDetails, onUpdate, onClose }) => {
  const updateRoomDetail = (roomIndex, key, value) => {
    const newDetails = [...roomDetails];
    newDetails[roomIndex] = { ...newDetails[roomIndex], [key]: value };
    
    const totalGuests = newDetails.reduce((sum, room) => sum + room.adults + room.children, 0);
    
    onUpdate({
      roomDetails: newDetails,
      rooms: newDetails.length,
      guests: totalGuests
    });
  };

  const addRoom = () => {
    const newDetails = [...roomDetails, { adults: 1, children: 0 }];
    onUpdate({
      roomDetails: newDetails,
      rooms: newDetails.length,
      guests: newDetails.reduce((sum, room) => sum + room.adults + room.children, 0)
    });
  };

  const removeRoom = () => {
    if (roomDetails.length > 1) {
      const newDetails = roomDetails.slice(0, -1);
      onUpdate({
        roomDetails: newDetails,
        rooms: newDetails.length,
        guests: newDetails.reduce((sum, room) => sum + room.adults + room.children, 0)
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Select Rooms & Guests</h3>
      </div>

      <div className="space-y-4">
        {roomDetails.map((room, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-700">Room {index + 1}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateRoomDetail(index, 'adults', Math.max(1, room.adults - 1))}
                    className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium w-8 text-center">{room.adults}</span>
                  <button
                    onClick={() => updateRoomDetail(index, 'adults', Math.min(4, room.adults + 1))}
                    className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Children</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateRoomDetail(index, 'children', Math.max(0, room.children - 1))}
                    className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium w-8 text-center">{room.children}</span>
                  <button
                    onClick={() => updateRoomDetail(index, 'children', Math.min(3, room.children + 1))}
                    className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 pt-4 border-t">
        <button
          onClick={removeRoom}
          disabled={roomDetails.length <= 1}
          className={`px-4 py-2 rounded ${
            roomDetails.length <= 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-red-600 hover:bg-red-50'
          }`}
        >
          Delete Room
        </button>
        <button
          onClick={addRoom}
          disabled={roomDetails.length >= 4}
          className={`px-4 py-2 rounded ${
            roomDetails.length >= 4
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          Add Room
        </button>
      </div>

      <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default GuestRoomPicker;