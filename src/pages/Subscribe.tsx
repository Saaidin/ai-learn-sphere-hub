
import React from 'react';

const Subscribe = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h1>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
