
import React from 'react';
import DonationForm from '@/components/DonationForm';

const Donate = () => {
  return (
    <section className="py-16 bg-ai-light">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get Free AI Resources</h3>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="space-y-4">
                <iframe 
                  src="https://form.jotform.com/250923040209447" 
                  title="AI Learning Platform Subscription" 
                  allowFullScreen
                  allow="geolocation; microphone; camera" 
                  className="w-full h-[400px] border-none"
                />
                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our privacy policy and consent to receive updates from AI Learning Platform.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Support Our Mission</h3>
            <DonationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
