import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = React.useState<FormData>({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { toast } = useToast();
  const ADMIN_EMAIL = 'dinme73@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords do not match",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    
    if (formData.email === ADMIN_EMAIL) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "This email is reserved for admin use",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
      password: formData.password
    }));

    toast({
      title: "Registration Successful",
      description: "You can now login with your credentials",
    });

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
};

export default RegistrationForm;