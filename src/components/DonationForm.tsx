
import React from 'react';
import { Button } from "@/components/ui/button";
import { DollarSign, Heart } from 'lucide-react';

const DonationForm = () => {
  const handlePayPalClick = () => {
    window.open("https://paypal.me/getfreeonline", "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
      <div className="space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-ai-light">
            <Heart className="h-8 w-8 text-ai-secondary" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Support Our Work</h3>
          <p className="text-gray-600">Your donation helps us create more quality AI learning content.</p>
        </div>
       
        <Button
          onClick={handlePayPalClick}
          className="w-full bg-ai-primary hover:bg-ai-accent"
        >
          <DollarSign className="mr-2 h-5 w-5" />
          Donate via PayPal
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          All donations go directly toward creating more AI learning resources. Thank you for your support!
        </p>
      </div>
    </div>
  );
};

export default DonationForm;
