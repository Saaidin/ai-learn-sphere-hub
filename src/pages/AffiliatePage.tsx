import React, { useState } from 'react';
import Header from '../components/Header';
import AffiliateTable from '../components/AffiliateTable';
import AffiliateForm from '../components/AffiliateForm';
import { Affiliate } from '../types/affiliate';
import { AffiliateProvider, useAffiliates } from '../context/AffiliateContext';

const AffiliateDashboard = () => {
  const { affiliates } = useAffiliates();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAffiliate, setEditingAffiliate] = useState<Affiliate | null>(null);

  const handleOpenAddModal = () => {
    setEditingAffiliate(null);
    setIsFormOpen(true);
  };

  const handleEditAffiliate = (affiliate: Affiliate) => {
    setEditingAffiliate(affiliate);
    setIsFormOpen(true);
  };

  const handleCloseModal = () => {
    setIsFormOpen(false);
    setEditingAffiliate(null);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Header openAddModal={handleOpenAddModal} />
      <AffiliateTable onEditAffiliate={handleEditAffiliate} />
      <AffiliateForm
        isOpen={isFormOpen}
        onClose={handleCloseModal}
        editingAffiliate={editingAffiliate}
      />
    </div>
  );
};

const AffiliatePage = () => (
  <AffiliateProvider>
    <AffiliateDashboard />
  </AffiliateProvider>
);

export default AffiliatePage;