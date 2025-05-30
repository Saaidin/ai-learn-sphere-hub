import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = React.useState<FormData>({
    email: '',
    password: ''
  });
  const { toast } = useToast();
  const ADMIN_EMAIL = 'dinme73@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No user found. Please sign up first.",
        action: <ToastAction altText="Sign up">Sign up</ToastAction>,
      });
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.email !== formData.email || user.password !== formData.password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid email or password",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
const isAdmin = formData.email === ADMIN_EMAIL;
localStorage.setItem('isAdmin', String(isAdmin));
localStorage.setItem('email', formData.email);

    
    toast({
      title: "Login Successful",
      description: isAdmin ? "You are logged in as admin" : "You are now logged in",
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
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;