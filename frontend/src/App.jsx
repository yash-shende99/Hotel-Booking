// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import HotelDetails from './pages/HotelDetails';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/hotel/:id' element={<HotelDetails />} />
        <Route path='/booking/:id' element={<BookingPage />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;