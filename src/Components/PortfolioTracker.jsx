import React from 'react';
import Transfer from './Transfer';
import Portfolio from './Portfolio';
import AddressCard from './AddressCard';
import Footer from './Footer';

const PortfolioTracker = () => {
    return (
        <div className='overflow-x-hidden'>
            <div>
                <AddressCard />
            </div>
            {/* <div className='mx-4 md:mx-32 '>
                <div className="">
                    <Portfolio />
                </div>
                <div className="mt-10 ">
                    <Transfer />
                </div>
            </div> */}
            {/* <div className='text-black my-10'>
                <h1 className='text-center'>support@securetrace.io - securedapp.io - 2024 </h1>
                <h1 className='text-center'>Terms od service and privacy</h1>
            </div> */}
            
        </div>
    )
}

export default PortfolioTracker;
