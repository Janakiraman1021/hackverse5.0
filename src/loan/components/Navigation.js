import React from 'react';

const tabs = [
  { id: 'request', label: 'Request Loan' },
  { id: 'approve', label: 'Approve Loans' },
  { id: 'transfer', label: 'Transfer NFT' },
  { id: 'repay', label: 'Repay Loan' },
  { id: 'default', label: 'Default Claims' },
];

export function Navigation({ currentTab, setCurrentTab }) {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">NFT Loans</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`${
                    currentTab === tab.id
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
