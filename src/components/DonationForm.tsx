
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DonationForm = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("25");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const handlePayPalDonation = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // In real implementation, we would redirect to PayPal
    const donationAmount = isCustomAmount ? customAmount : amount;
    
    // Log the donation information (for demonstration)
    console.log("Donation information:", {
      name,
      email,
      amount: donationAmount,
      message,
    });
    
    // Construct PayPal URL with necessary parameters
    const paypalBusinessEmail = "dinme73@gmail.com";
    const donationPurpose = "AI Learning Platform Donation";
    
    const paypalUrl = `https://www.paypal.com/donate?business=${encodeURIComponent(paypalBusinessEmail)}&item_name=${encodeURIComponent(donationPurpose)}&amount=${encodeURIComponent(donationAmount)}&currency_code=USD`;
    
    // Notify user
    toast({
      title: "Redirecting to PayPal",
      description: `You will be redirected to PayPal to complete your $${donationAmount} donation.`,
    });
    
    // Open PayPal in new window
    window.open(paypalUrl, "_blank");
  };

  const handleAmountSelect = (value: string) => {
    if (value === "custom") {
      setIsCustomAmount(true);
    } else {
      setIsCustomAmount(false);
      setAmount(value);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
      <form onSubmit={handlePayPalDonation} className="space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-ai-light">
            <Heart className="h-8 w-8 text-ai-secondary" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Support Our Work</h3>
          <p className="text-gray-600">Your donation helps us create more quality AI learning content.</p>
        </div>
        
        <div className="space-y-2">
          <Label>Select Donation Amount</Label>
          <RadioGroup value={isCustomAmount ? "custom" : amount} onValueChange={handleAmountSelect} className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <RadioGroupItem id="amount-5" value="5" className="peer sr-only" />
              <Label htmlFor="amount-5" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-ai-primary [&:has([data-state=checked])]:border-primary">
                <DollarSign className="mb-1 h-5 w-5" />
                <span className="text-xl font-bold">$5</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem id="amount-10" value="10" className="peer sr-only" />
              <Label htmlFor="amount-10" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-ai-primary [&:has([data-state=checked])]:border-primary">
                <DollarSign className="mb-1 h-5 w-5" />
                <span className="text-xl font-bold">$10</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem id="amount-25" value="25" className="peer sr-only" />
              <Label htmlFor="amount-25" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-ai-primary [&:has([data-state=checked])]:border-primary">
                <DollarSign className="mb-1 h-5 w-5" />
                <span className="text-xl font-bold">$25</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem id="amount-custom" value="custom" className="peer sr-only" />
              <Label htmlFor="amount-custom" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-ai-primary [&:has([data-state=checked])]:border-primary">
                <DollarSign className="mb-1 h-5 w-5" />
                <span className="text-xl font-bold">Custom</span>
              </Label>
            </div>
          </RadioGroup>
          
          {isCustomAmount && (
            <div className="pt-3">
              <Label htmlFor="customAmount">Custom Amount ($)</Label>
              <Input 
                id="customAmount"
                type="number"
                min="1"
                step="1"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                required={isCustomAmount}
                className="mt-1"
              />
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Add a message with your donation"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        
        <Button type="submit" className="w-full bg-ai-primary hover:bg-ai-accent">
          <DollarSign className="mr-2 h-5 w-5" />
          Donate via PayPal
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          All donations go directly toward creating more AI learning resources. Thank you for your support!
        </p>
      </form>
    </div>
  );
};

export default DonationForm;
