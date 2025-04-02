
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailCheck } from 'lucide-react';

const SubscriptionForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // In a real application, you would send this data to your backend
      console.log("Submitting subscription:", { name, email });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success notification
      toast({
        title: "Subscription Successful!",
        description: "Your free eBooks will be sent to your email shortly.",
      });
      
      // Clear form and show success state
      setName("");
      setEmail("");
      setIsSuccess(true);
      
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
            Your free eBooks will be sent to your email inbox shortly.
          </p>
          <Button onClick={resetForm} variant="outline">Subscribe Another Email</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Get Free AI eBooks</h3>
            <p className="text-gray-600">Subscribe to our newsletter for exclusive AI content.</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-ai-primary hover:bg-ai-accent" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By subscribing, you agree to our privacy policy and consent to receive updates from AI Learning Platform.
          </p>
        </form>
      )}
    </div>
  );
};

export default SubscriptionForm;
