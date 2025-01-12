import React from 'react';
import { Upload } from 'lucide-react';

export function NFTTransfer() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Transfer NFT</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <div className="aspect-square w-full max-w-sm mx-auto rounded-lg border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop"
              alt="NFT Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Upload className="h-5 w-5 mr-2" />
            Transfer NFT to Contract
          </button>
        </div>
      </div>
    </div>
  );
}
