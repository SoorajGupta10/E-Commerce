import React, { useState } from 'react';

function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  const handleCloseModal = () => {
    setIsSubscribed(false);
  };

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-purple-600 opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 -right-4 w-32 h-32 rounded-full bg-pink-700 opacity-20 animate-ping animate-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-indigo-700 opacity-15 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-28 h-28 rounded-full bg-purple-500 opacity-20 animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Exclusive</span> Community
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and get <span className="font-semibold text-purple-300">20% off</span> your first purchase, plus access to exclusive content and early product releases.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto mb-8">
          <div className="relative flex-1 w-full">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="w-full px-6 py-5 rounded-2xl bg-white/95 border-2 border-purple-300/30 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/30 placeholder-gray-500 text-gray-800 shadow-2xl shadow-purple-900/30 transition-all duration-300 hover:bg-white" 
              required 
            />
            <svg 
              className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
            </svg>
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className={`px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/20 flex items-center justify-center gap-2 min-w-max ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                Subscribe
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </>
            )}
          </button>
        </form>
        
        <p className="text-purple-200 text-sm opacity-90 max-w-xl mx-auto">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company. You can unsubscribe at any time.
        </p>
      </div>

      {/* Success Modal */}
      {isSubscribed && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-3xl max-w-md w-full p-8 text-center shadow-2xl animate-scaleIn">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Aboard!</h3>
            <p className="text-gray-600 mb-6">Thank you for subscribing to our newsletter. Check your email for your 20% off discount code.</p>
            <button 
              onClick={handleCloseModal}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsletterBox;