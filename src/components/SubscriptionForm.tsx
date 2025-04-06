

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MailCheck } from 'lucide-react';

declare global {
  interface Window {
    jotform?: {
      (callback: () => void): void;
    };
  }
}

const SubscriptionForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load JotForm script
    const script = document.createElement('script');
    script.src = 'https://js.jotform.com/JotForm.js';
    script.async = true;
    script.onload = () => {
      console.log('JotForm script loaded successfully');
      setScriptLoaded(true);
      
      if (window.jotform) {
        window.jotform(() => {
          console.log('Jotform initialized successfully');
        });
      }
    };
    script.onerror = () => {
      console.error('Failed to load JotForm script');
    };
    document.body.appendChild(script);

    const handleSubmission = (event) => {
      if (event.data && event.data.action === 'submission-completed') {
        setIsSuccess(true);
      }
    };

    window.addEventListener('message', handleSubmission);
    return () => {
      window.removeEventListener('message', handleSubmission);
      document.body.removeChild(script);
    };
  }, [isSuccess]);

  const resetForm = () => {
    setIsSuccess(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
            <MailCheck className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Thank You for Subscribing!</h3>
          <p className="text-gray-600 mb-4">
            Your free eBooks or others will be sent to your email inbox shortly.
          </p>
          <Button onClick={resetForm} variant="outline">Subscribe Another Email</Button>
        </div>
      ) : (
        <div className="space-y-4">
          
          {/* JotForm embed */}
          {scriptLoaded && (
            <>
              <iframe
                src="https://form.jotform.com/250923040209447"
                title="AI Learning Platform Subscription"
                style={{width: '100%', height: '400px', border: 'none'}}
                allowFullScreen
                allow="geolocation; microphone; camera"
              ></iframe>
            </>
          )}
          
          <p className="text-xs text-gray-500 text-center">
            By subscribing, you agree to our privacy policy and consent to receive updates from AI Learning Platform.
          </p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
