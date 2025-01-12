import React from 'react';
import { DollarSign } from 'lucide-react';

export function LoanRepayment() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Repay Loan</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Loan Amount:</span>
            <span className="font-semibold">1.5 ETH</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Interest (10%):</span>
            <span className="font-semibold">0.15 ETH</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-lg">
            <span className="text-indigo-600 font-medium">Total to Repay:</span>
            <span className="font-bold text-indigo-600">1.65 ETH</span>
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <DollarSign className="h-5 w-5 mr-2" />
            Repay Loan
          </button>
        </div>
      </div>
    </div>
  );
}