// src/components/CategoryGrid.jsx
import React from 'react';
import { Building, Home, Castle, Mountain, Coffee, Heart, Briefcase, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryGrid = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Luxury Hotels",
      count: "850+ Properties",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Budget Stays",
      count: "2,500+ Properties",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop"
    },
    {
      icon: <Castle className="w-8 h-8" />,
      title: "Heritage Properties",
      count: "320+ Properties",
      color: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=400&h=300&fit=crop"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Hill Stations",
      count: "450+ Properties",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Beach Resorts",
      count: "280+ Properties",
      color: "from-sky-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Romantic Getaways",
      count: "190+ Properties",
      color: "from-rose-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Hotels",
      count: "1,200+ Properties",
      color: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=400&h=300&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Friendly",
      count: "1,800+ Properties",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop"
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/search?category=${category.title.toLowerCase()}`);
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover perfect stays for every occasion and preference
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Background Image with Gradient */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`} />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 p-3 bg-white bg-opacity-90 rounded-xl">
                  <div className={`text-transparent bg-gradient-to-br ${category.color} bg-clip-text`}>
                    {category.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.count}</p>
                <button className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  Explore
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-full transition-colors">
            <span>View All Categories</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;