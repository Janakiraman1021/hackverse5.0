import React from 'react';
import time from '../Assests/time.png';
import audio from '../Assests/audio.png';
// import Transfer from './Transfer';
// import Portfolio from './Portfolio';
// import Transactions from './Transactions';

const Dashboard = () => {
    return (
        <div className=" grid grid-cols-1 gap-10">
            <div className="space-y-10 mx-4 md:mx-14">
                {/* <Portfolio /> */}

                {/* <div className="w-full"> */}
                    {/* <Transfer /> */}
                    {/* <Transactions/> */}
                {/* </div> */}

               <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-16'>
                <div className="bg-white p-6 w-full rounded-xl border border-black shadow-md shadow-gray-500">
                    <div className="flex gap-2">
                        <img className="h-6 w-6" src={time} alt="time" />
                        <h3 className="text-lg font-semibold mb-4">Balance History</h3>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg">
                        {/* Placeholder for graph */}
                    </div>
                </div>

                
                <div className="bg-white p-6 w-full rounded-xl border border-black shadow-md shadow-gray-500 mt-10 md:mt-0">
                    <div className="flex gap-2">
                        <img className="h-6 w-6" src={audio} alt="audio" />
                        <h3 className="text-lg font-semibold mb-4">Visualizer</h3>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg">
                        {/* Placeholder for visualizer */}
                    </div>
                </div>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
