// src/context/SearchContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 86400000), // Tomorrow
    guests: 1,
    rooms: 1,
    roomDetails: [{ adults: 1, children: 0 }]
  });

  const updateSearchData = (data) => {
    setSearchData(prev => ({ ...prev, ...data }));
  };

  return (
    <SearchContext.Provider value={{ searchData, updateSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};