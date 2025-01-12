// JavaScript doesn't have interfaces, so we can just use plain objects

// LoanRequest object shape
export const LoanRequest = {
    id: '', // string
    borrowerAddress: '', // string
    contractAddress: '', // string
    tokenId: '', // string
    loanAmount: 0, // number
    duration: 0, // number
    status: 'pending', // 'pending' | 'approved' | 'rejected' | 'repaid' | 'defaulted'
    nftImage: '', // optional string
    timestamp: 0, // number
  };
  
  // TabProps object
  export const TabProps = {
    currentTab: '', // string
    setCurrentTab: function(tab) {
      // Function to set the current tab
    }
  };
      