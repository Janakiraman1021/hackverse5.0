import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function LoanDefault() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Default Claims</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-600 font-medium">Loan Overdue</span>
            </div>
            <p className="mt-2 text-sm text-red-500">
              This loan has exceeded its duration period and is eligible for default claim.
            </p>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Original Loan Amount:</span>
            <span className="font-semibold">1.5 ETH</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Days Overdue:</span>
            <span className="font-semibold">5 days</span>
          </div>
          <button className="w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Claim NFT
          </button>
        </div>
      </div>
    </div>
  );
}
