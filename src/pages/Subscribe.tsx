
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriptionForm from '@/components/SubscriptionForm';
import { Book, Check } from 'lucide-react';

const Subscribe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 mx-auto py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">Subscribe for Free AI eBooks</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Join our community and get exclusive access to AI learning resources, tutorials, 
                  and valuable insights delivered directly to your inbox.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Access to premium eBooks on machine learning, deep learning, and AI ethics</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Weekly newsletter with the latest AI news and research updates</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Early access to upcoming tutorials and educational content</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">Exclusive discounts on advanced AI courses and workshops</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Book className="h-6 w-6 text-ai-primary mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Your email <span className="font-medium">will be sent to dinme73@gmail.com</span> for processing and delivery of the free resources.
                  </p>
                </div>
              </div>
              
              <div>
                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subscribe;
