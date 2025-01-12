import React, { useState } from 'react';
import { LoanRequest } from './LoanRequest';
import { LoanApproval } from './LoanApproval';
import { NFTTransfer } from './NFTTransfer';
import { LoanRepayment } from './Loanrepayment';
import { LoanDefault } from './Loandefault';
import { Navigation } from './Navigation'; // Assuming Navigation is for loan-related tabs

export function LoanSection() {
  const [currentTab, setCurrentTab] = useState('request');

  const renderContent = () => {
    switch (currentTab) {
      case 'request':
        return <LoanRequest />;
      case 'approve':
        return <LoanApproval />;
      case 'transfer':
        return <NFTTransfer />;
      case 'repay':
        return <LoanRepayment />;
      case 'default':
        return <LoanDefault />;
      default:
        return <LoanRequest />;
    }
  };

  return (
    <div>
      {/* Tab-based navigation for loan section */}
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main content based on the selected tab */}
      <main className="py-10">
        {renderContent()}
      </main>
    </div>
  );
}
