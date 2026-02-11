// src/components/Header.jsx
import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User, Phone, Check } from 'lucide-react';

const Header = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        phone: '',
        rememberMe: false,
        acceptTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login
            console.log('Login data:', { email: formData.email, password: formData.password });
            setShowAuthModal(false);
            // Reset form
            setFormData({
                email: '',
                password: '',
                name: '',
                phone: '',
                rememberMe: false,
                acceptTerms: false
            });
        } else {
            // Handle signup
            console.log('Signup data:', formData);
            setShowAuthModal(false);
            // Reset form
            setFormData({
                email: '',
                password: '',
                name: '',
                phone: '',
                rememberMe: false,
                acceptTerms: false
            });
        }
    };

    return (
        <>
            <header className="w-full bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center justify-between h-16 px-4">

                    {/* Left Section - Logo */}
                    <div className="flex items-center">
                        <div className="logo-wrapper cursor-pointer">
                            <svg
                                width="95"
                                height="29"
                                viewBox="0 0 95 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <text
                                    x="0"
                                    y="22"
                                    fontSize="24"
                                    fontWeight="900"
                                    fontFamily="Arial Black, Impact, sans-serif"
                                    fill="#282828"
                                    letterSpacing="1.5"
                                >
                                    STAY
                                </text>
                            </svg>
                        </div>
                    </div>


                    {/* Right Section */}
                    <div className="flex items-center space-x-4">

                        {/* Become a Member Card - Hidden on mobile */}
                        <div className="hidden md:flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg px-3 py-1.5 cursor-pointer hover:from-blue-100 hover:to-blue-200 transition-colors">
                            <div className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                                    <path d="M1.95603 5.4489C1.84279 5.19704 1.54682 5.08467 1.29497 5.1979C1.04311 5.31114 0.930736 5.60711 1.04397 5.85896L1.95603 5.4489ZM8.0625 20.2501L7.60647 20.4551C7.68914 20.639 7.87413 20.7552 8.07565 20.7499C8.27717 20.7446 8.45579 20.6188 8.52868 20.4309L8.0625 20.2501ZM12.4662 10.277C12.566 10.0196 12.4382 9.7299 12.1808 9.63006C11.9233 9.53022 11.6337 9.658 11.5338 9.91546L12.4662 10.277ZM1.04397 5.85896L7.60647 20.4551L8.51853 20.0451L1.95603 5.4489L1.04397 5.85896ZM8.52868 20.4309L12.4662 10.277L11.5338 9.91546L7.59632 20.0693L8.52868 20.4309Z" fill="#212121"></path>
                                    <path d="M22.044 5.4489C22.1572 5.19704 22.4532 5.08467 22.705 5.1979C22.9569 5.31114 23.0693 5.60711 22.956 5.85896L22.044 5.4489ZM15.9375 20.2501L16.3935 20.4551C16.3094 20.6421 16.1197 20.7589 15.9149 20.7496C15.71 20.7403 15.5316 20.6069 15.4648 20.413L15.9375 20.2501ZM12.8398 12.7976C12.7498 12.5366 12.8885 12.252 13.1496 12.162C13.4106 12.072 13.6952 12.2107 13.7852 12.4718L12.8398 12.7976ZM22.956 5.85896L16.3935 20.4551L15.4815 20.0451L22.044 5.4489L22.956 5.85896ZM15.4648 20.413L12.8398 12.7976L13.7852 12.4718L16.4102 20.0871L15.4648 20.413Z" fill="#212121"></path>
                                    <path d="M8.0625 13.9038L12 3.75L15.9375 13.7055L19.875 5.01923M4.125 5.01923L6.75 11.3654" stroke="#212121" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-900">Become a Member</div>
                                <div className="text-xs text-gray-600">Additional 10% off</div>
                            </div>
                        </div>

                        {/* STAY for Business → OFFERS - Hidden on mobile */}
                        <div className="hidden lg:flex items-center px-3 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="mr-2">
                                <svg width="16" height="14" viewBox="0 0 20 17" className="text-gray-700">
                                    <path d="M9.943 0c-1.9 0-3.55.237-3.82 1.818H3.181C1.41 1.818 0 3.345 0 5.192v7.791c0 1.846 1.41 3.38 3.182 3.38h13.636c1.772 0 3.182-1.534 3.182-3.38V5.192c0-1.847-1.41-3.374-3.182-3.374h-3.054C13.494.237 11.844 0 9.944 0zM10 .911c1.385 0 2.47-.093 2.727.907H7.273C7.53.818 8.615.911 10 .911zM3.182 2.727h13.636c1.25 0 2.273 1.004 2.273 2.306v.996c-1.926 1.136-4.512 1.925-7.415 2.153-.23-.694-.919-1.203-1.733-1.203-.814 0-1.503.509-1.733 1.203-2.846-.224-5.387-.986-7.3-2.086V5.033c0-1.302 1.022-2.306 2.272-2.306zM19.09 7.19v5.781c0 1.398-1.023 2.485-2.273 2.485H3.182c-1.25 0-2.273-1.087-2.273-2.485V7.273c1.996 1.125 4.442 1.734 7.205 1.962l.073.287a1.83 1.83 0 0 0 1.756 1.363 1.83 1.83 0 0 0 1.745-1.322c.012-.040.077-.288.086-.328 2.815-.232 5.304-.887 7.317-2.046zM10 8c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1z" opacity=".7"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-900">Offers</div>
                                <div className="text-xs text-gray-600">Additional 20% off</div>
                            </div>
                        </div>

                        {/* List your property → My Bookings - Hidden on mobile */}
                        <div className="hidden md:flex items-center px-3 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                                    <path d="M11 6H5" stroke="#6F787C" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M19 12H17" stroke="#6F787C" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M14 8H22V22H14M14 22V2H2V22H14ZM6 16H10V22H6V16Z" stroke="#6F787C" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-900">My Bookings</div>
                                <div className="text-xs text-gray-600">View & Manage</div>
                            </div>
                        </div>

                        {/* Call us - Hidden on mobile */}
                        <div className="hidden md:flex items-center px-3 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                                    <path d="M21.9994 16.92V19.92C22.0006 20.1985 21.9435 20.4742 21.832 20.7294C21.7204 20.9845 21.5567 21.2136 21.3515 21.4019C21.1463 21.5901 20.904 21.7335 20.6402 21.8227C20.3764 21.9119 20.0968 21.9451 19.8194 21.92C16.7423 21.5856 13.7864 20.5342 11.1894 18.85C8.77327 17.3147 6.72478 15.2662 5.18945 12.85C3.49942 10.2412 2.44769 7.271 2.11944 4.18001C2.09446 3.90347 2.12732 3.62477 2.21595 3.36163C2.30457 3.09849 2.44702 2.85669 2.63421 2.65163C2.82141 2.44656 3.04925 2.28271 3.30324 2.17053C3.55722 2.05834 3.83179 2.00027 4.10945 2.00001H7.10945C7.59475 1.99523 8.06524 2.16708 8.43321 2.48354C8.80118 2.79999 9.04152 3.23945 9.10944 3.72001C9.23607 4.68007 9.47089 5.62273 9.80945 6.53001C9.94399 6.88793 9.97311 7.27692 9.89335 7.65089C9.8136 8.02485 9.62831 8.36812 9.35944 8.64001L8.08945 9.91001C9.513 12.4136 11.5859 14.4865 14.0894 15.91L15.3594 14.64C15.6313 14.3711 15.9746 14.1859 16.3486 14.1061C16.7225 14.0263 17.1115 14.0555 17.4694 14.19C18.3767 14.5286 19.3194 14.7634 20.2794 14.89C20.7652 14.9585 21.2088 15.2032 21.526 15.5775C21.8431 15.9518 22.0116 16.4296 21.9994 16.92Z" stroke="#212121" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-900">0124-6201611</div>
                                <div className="text-xs text-gray-600">Call to Book</div>
                            </div>
                        </div>

                        {/* Language Selector */}
                        <div className="flex items-center px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-500 mr-1">
                                <path fill="#979797" fillRule="nonzero" d="M13.442 2.308A7.816 7.816 0 0 0 7.875 0C5.773 0 3.793.82 2.308 2.308A7.835 7.835 0 0 0 0 7.875c0 2.102.82 4.082 2.308 5.567a7.835 7.835 0 0 0 5.567 2.308c2.102 0 4.082-.82 5.567-2.308a7.835 7.835 0 0 0 2.308-5.567c0-2.102-.82-4.082-2.308-5.567zm1.594 5.213h-3.053c-.03-1.215-.2-2.385-.498-3.423a7.81 7.81 0 0 0 1.623-1.118 7.152 7.152 0 0 1 1.928 4.541zM8.23 8.23h3.05a12.926 12.926 0 0 1-.447 3.146 7.95 7.95 0 0 0-2.603-.565V8.229zM12.6 2.488a7.161 7.161 0 0 1-1.337.929 8.21 8.21 0 0 0-.415-.964c-.305-.605-.652-1.1-1.035-1.48A7.139 7.139 0 0 1 12.6 2.489zM8.229.816c.736.164 1.43.843 1.99 1.948.15.3.285.617.404.955a7.213 7.213 0 0 1-2.394.537V.816zm2.606 3.581c.264.952.415 2.015.44 3.128H8.23V4.966a7.954 7.954 0 0 0 2.606-.569zM7.521 7.521h-3.05c.026-1.112.177-2.176.44-3.127a7.807 7.807 0 0 0 2.607.566V7.52h.003zM7.525.816v3.44a7.196 7.196 0 0 1-2.395-.537c.119-.338.254-.656.405-.955C6.095 1.66 6.789.98 7.525.816zM5.94.974c-.383.38-.73.877-1.035 1.478-.151.303-.29.624-.415.965a7.268 7.268 0 0 1-1.337-.93A7.139 7.139 0 0 1 5.94.975zM2.645 2.98A7.935 7.935 0 0 0 4.27 4.098a13.55 13.55 0 0 0-.499 3.423H.717A7.152 7.152 0 0 1 2.645 2.98zM.717 8.229H3.77c.03 1.224.203 2.397.505 3.442a7.739 7.739 0 0 0-1.617 1.112A7.14 7.14 0 0 1 .717 8.23zm2.45 5.046c.41-.36.857-.669 1.33-.923.122.332.257.65.408.945.305.605.652 1.1 1.035 1.482a7.174 7.174 0 0 1-2.774-1.504zm4.358 1.659c-.736-.164-1.43-.843-1.99-1.948a8.262 8.262 0 0 1-.399-.936 7.095 7.095 0 0 1 2.389-.533v3.417zM4.92 11.375a12.926 12.926 0 0 1-.447-3.146h3.05v2.58a7.79 7.79 0 0 0-2.603.566zm3.31 3.559v-3.417c.83.042 1.637.222 2.389.533-.119.331-.25.643-.399.936-.559 1.105-1.253 1.784-1.99 1.948zm1.585-.158c.383-.38.73-.877 1.035-1.482a8.71 8.71 0 0 0 .409-.945c.472.254.919.563 1.33.923a7.091 7.091 0 0 1-2.774 1.504zm3.285-1.993a7.863 7.863 0 0 0-1.616-1.112c.302-1.045.475-2.221.504-3.442h3.054a7.174 7.174 0 0 1-1.942 4.554z"></path>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 mr-1">EN</span>
                            <svg width="8" height="6" viewBox="0 0 8 6" className="text-gray-900 opacity-70">
                                <path d="M0 0h8L4 6z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>

                        {/* Login/Signup Button */}
                        <div 
                            className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                            onClick={() => setShowAuthModal(true)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700 mr-2">
                                <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#212121"></path>
                                <path d="M20 17C20 18.6569 16.4183 20 12 20C7.58172 20 4 18.6569 4 17C4 15.3431 7.58172 14 12 14C16.4183 14 20 15.3431 20 17Z" fill="#212121"></path>
                            </svg>
                            <div className="text-sm font-semibold text-gray-900">Login / Signup</div>
                        </div>

                    </div>
                </div>
            </header>

            {/* Authentication Modal */}
            {showAuthModal && (
                <div className="fixed inset-0 z-50 flex items-center bg-white justify-center p-4">
                    
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {isLogin ? 'Welcome Back!' : 'Join STAY'}
                                </h2>
                                <p className="text-sm text-gray-600 mt-1">
                                    {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
                                </p>
                            </div>
                            <button
                                onClick={() => setShowAuthModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            {/* Toggle between Login and Signup */}
                            <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${isLogin ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${!isLogin ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {!isLogin && (
                                    <>
                                        {/* Name Field - Signup only */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <User className="w-5 h-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                                    placeholder="Enter your full name"
                                                    required={!isLogin}
                                                />
                                            </div>
                                        </div>

                                        {/* Phone Field - Signup only */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <Phone className="w-5 h-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                                    placeholder="Enter your phone number"
                                                    required={!isLogin}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <Lock className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                            placeholder="Enter your password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me - Login only */}
                                {isLogin && (
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                                            Remember me
                                        </label>
                                        <a href="#" className="ml-auto text-sm text-red-600 hover:text-red-800">
                                            Forgot password?
                                        </a>
                                    </div>
                                )}

                                {/* Terms & Conditions - Signup only */}
                                {!isLogin && (
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="acceptTerms"
                                            name="acceptTerms"
                                            checked={formData.acceptTerms}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 mt-1 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            required
                                        />
                                        <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-700">
                                            I agree to the{' '}
                                            <a href="#" className="text-red-600 hover:text-red-800">
                                                Terms & Conditions
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="text-red-600 hover:text-red-800">
                                                Privacy Policy
                                            </a>
                                        </label>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                                >
                                    {isLogin ? 'Sign In' : 'Create Account'}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="my-6 flex items-center">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="mx-4 text-sm text-gray-500">or continue with</span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>

                            {/* Social Login Options */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    <span className="text-sm font-medium">Google</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span className="text-sm font-medium">Facebook</span>
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <button
                                        type="button"
                                        onClick={() => setIsLogin(!isLogin)}
                                        className="text-red-600 hover:text-red-800 font-semibold"
                                    >
                                        {isLogin ? 'Sign up' : 'Sign in'}
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* Wizard Member Promo */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-t border-gray-200 rounded-b-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">W</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Become a Wizard Member!</p>
                                    <p className="text-xs text-gray-600">Get 15% off on all bookings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;