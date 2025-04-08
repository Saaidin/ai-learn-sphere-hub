import React, { createContext, useState, useContext, ReactNode } from "react";
import { Affiliate } from "../types/affiliate";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

interface AffiliateContextType {
  affiliates: Affiliate[];
  addAffiliate: (affiliate: Omit<Affiliate, "id">) => void;
  updateAffiliate: (affiliate: Affiliate) => void;
  deleteAffiliate: (id: string) => void;
  searchAffiliates: (query: string) => Affiliate[];
}

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

const initialAffiliates: Affiliate[] = [
  {
    id: "1",
    name: "Amazon Associates",
    company: "Amazon",
    website: "https://amazon.com",
    affiliateLink: "https://amazon.com/ref=johndoe",
  },
  {
    id: "2",
    name: "Shopify Partners",
    company: "Shopify",
    website: "https://shopify.com",
    affiliateLink: "https://shopify.com/?ref=janesmith",
  },
  {
    id: "3",
    name: "eBay Partner Network",
    company: "eBay",
    website: "https://ebay.com",
    affiliateLink: "https://ebay.com/ref=mikejohnson",
  },
];

export const AffiliateProvider = ({ children }: { children: ReactNode }) => {
  const [affiliates, setAffiliates] = useState<Affiliate[]>(() => {
    const stored = localStorage.getItem('affiliates');
    return stored ? JSON.parse(stored) : initialAffiliates;
  });

  const addAffiliate = (affiliate: Omit<Affiliate, "id">) => {
    const newAffiliate = {
      ...affiliate,
      id: uuidv4(),
    };
    setAffiliates((prev) => [...prev, newAffiliate]);
    toast.success("Affiliate added successfully");
  };

  const updateAffiliate = (affiliate: Affiliate) => {
    setAffiliates((prev) =>
      prev.map((item) => (item.id === affiliate.id ? affiliate : item))
    );
    toast.success("Affiliate updated successfully");
  };

  const deleteAffiliate = (id: string) => {
    setAffiliates((prev) => prev.filter((item) => item.id !== id));
    toast.success("Affiliate removed successfully");
  };

  const searchAffiliates = (query: string) => {
    if (!query) return affiliates;

    const lowercaseQuery = query.toLowerCase();
    return affiliates.filter(
      (affiliate) =>
        affiliate.name.toLowerCase().includes(lowercaseQuery) ||
        affiliate.company.toLowerCase().includes(lowercaseQuery) ||
        affiliate.website.toLowerCase().includes(lowercaseQuery)
    );
  };
  React.useEffect(() => {
    localStorage.setItem('affiliates', JSON.stringify(affiliates));
  }, [affiliates]);

  return (
    <AffiliateContext.Provider
      value={{
        affiliates,
        addAffiliate,
        updateAffiliate,
        deleteAffiliate,
        searchAffiliates,
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
};

export const useAffiliates = () => {
  const context = useContext(AffiliateContext);
  if (context === undefined) {
    throw new Error("useAffiliates must be used within an AffiliateProvider");
  }
  return context;
};