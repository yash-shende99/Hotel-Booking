// src/pages/HomePage.jsx
import Header from "../components/Header"
import SearchSection from "../components/SearchSection"
import PromotionalBanner from "../components/PromotionalBanner"
import Banner from "../components/Banner"
import CategoryGrid from "../components/CategoryGrid"
import TrendingDestinations from "../components/TrendingDestinations"
import HotelsCarousel from "../components/HotelsCarousel"
import Testimonials from "../components/Testimonials"
import MobileAppBanner from "../components/MobileAppBanner"
import NewsletterSignup from "../components/NewsletterSignup"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <SearchSection />
      <Banner />
      {/* <CategoryGrid /> */}
      <TrendingDestinations />
      <HotelsCarousel />
      {/* <Testimonials /> */}
      <NewsletterSignup />
      <MobileAppBanner />
      <Footer />
    </div>
  );
}

export default HomePage;