
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  linkTo: string;
  linkText: string;
  children: React.ReactNode;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ 
  title, 
  subtitle, 
  linkTo, 
  linkText, 
  children 
}) => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <Button asChild variant="ghost" className="text-ai-primary hover:text-ai-accent flex items-center mt-4 md:mt-0">
            <Link to={linkTo}>
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default FeaturedSection;
