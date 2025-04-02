
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DonationForm from '@/components/DonationForm';
import { Heart, Check } from 'lucide-react';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 mx-auto py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-16 w-16 rounded-full bg-ai-light flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-ai-secondary" />
                </div>
                
                <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Your donation helps us create more quality AI learning content and keep our resources accessible to learners worldwide.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Fund the development of new AI tutorials and courses</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Support our writers and content creators</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Help maintain and improve our platform</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Enable us to create more free educational resources</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-ai-primary to-ai-secondary p-5 rounded-lg text-white">
                  <p className="font-medium">
                    "Your generosity makes a significant difference in our ability to provide quality AI education to learners around the world."
                  </p>
                  <p className="mt-2 text-sm opacity-80">— The AI Learning Platform Team</p>
                </div>
              </div>
              
              <div>
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
