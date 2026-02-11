// src/components/DateRangePicker.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addDays, isBefore, isAfter } from 'date-fns';

const DateRangePicker = ({ startDate, endDate, onSelect, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(startDate);
  const [nextMonth, setNextMonth] = useState(addMonths(startDate, 1));
  const [selection, setSelection] = useState({
    start: startDate,
    end: endDate,
    selecting: false
  });

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setNextMonth(subMonths(nextMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setNextMonth(addMonths(nextMonth, 1));
  };

  const handleDateClick = (date) => {
    if (selection.selecting && selection.start && isAfter(date, selection.start)) {
      const newSelection = { start: selection.start, end: date, selecting: false };
      setSelection(newSelection);
      onSelect({ startDate: newSelection.start, endDate: newSelection.end });
    } else {
      setSelection({ start: date, end: null, selecting: true });
    }
  };

  const isInRange = (date) => {
    if (!selection.start || !selection.end) return false;
    return isAfter(date, selection.start) && isBefore(date, selection.end);
  };

  const isStartDate = (date) => selection.start && isSameDay(date, selection.start);
  const isEndDate = (date) => selection.end && isSameDay(date, selection.end);

  const renderMonth = (month) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    return (
      <div className="w-64">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">
            {format(month, 'MMMM yyyy')}
          </h3>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="text-center text-xs text-gray-500 font-medium">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: new Date(month).getDay() }).map((_, i) => (
            <div key={`empty-${i}`} className="h-8" />
          ))}
          
          {days.map(day => {
            const isCurrentMonth = isSameMonth(day, month);
            const isSelected = isStartDate(day) || isEndDate(day);
            const inRange = isInRange(day);
            const isToday = isSameDay(day, new Date());

            return (
              <button
                key={day.toString()}
                onClick={() => isCurrentMonth && handleDateClick(day)}
                disabled={!isCurrentMonth || isBefore(day, new Date())}
                className={`
                  h-8 w-8 rounded-full text-sm font-medium
                  ${!isCurrentMonth ? 'text-gray-300 cursor-default' : ''}
                  ${isBefore(day, new Date()) ? 'text-gray-300 cursor-not-allowed' : ''}
                  ${isSelected ? 'bg-red-500 text-white' : ''}
                  ${inRange ? 'bg-red-100' : ''}
                  ${isToday && !isSelected ? 'border border-red-500' : ''}
                  ${isCurrentMonth && !isSelected && !inRange ? 'hover:bg-gray-100' : ''}
                  flex items-center justify-center
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-8">
          {renderMonth(currentMonth)}
          {renderMonth(nextMonth)}
        </div>
        
        <button
          onClick={handleNextMonth}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <div className="text-sm text-gray-600">
          {selection.start && selection.end && (
            <>
              {format(selection.start, 'MMM d, yyyy')} - {format(selection.end, 'MMM d, yyyy')}
            </>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (selection.start && selection.end) {
                onSelect({ startDate: selection.start, endDate: selection.end });
              }
            }}
            className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;