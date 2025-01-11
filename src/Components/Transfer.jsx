import React, { useEffect } from "react";
import { useState } from "react";
import btc from '../Assests/Bitcoin.png';
import axios from "axios";


const Transfer = () => {

    const transferData = [
        {
            icon: btc,
            time: '0 day ago',
            from: '0xD78...35Cx',
            to: '0xD78...35Cx',
            value: '0.00K',
            token: 'USDT',
            usd: '$0.00K',
        },

    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [transfers, setTransfers] = useState([]);
    const [loading, setLoading] = useState(false);


    const totalPages = Math.ceil(transfers.length / rowsPerPage);


    const currentRows = transfers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };



    useEffect(() => {
        const fetchTransfers = async () => {
            setLoading(true);

            try {
                const response = await axios.get(
                    "https://caiman-wanted-fox.ngrok-free.app/token-transfers/0x04b21735E93Fa3f8df70e2Da89e6922616891a88",
                    {
                        headers: {
                            "ngrok-skip-browser-warning": "true",

                            "Content-Type": "application/json",
                        },
                    }
                );

                setTransfers(response.data.from[0]);
                console.log("Transfres from:",response.data.from[0]);

                setLoading(false);
            } catch (error) {
                console.log("error", error);

                setLoading(false);
            }
        };

        fetchTransfers();
    }, []);

    // useEffect(
    //     () => {
    //         console.log("Transfres from:", transfers.from);
    //     }, [transfers]
    // )


    return (
        <div className="overflow-x-hidden bg-white p-6 rounded-xl border border-black shadow-md shadow-gray-500" id="hide-scrollbar">
            <div className="">
                <div className='flex'>
                    <h3 className="text-2xl font-semibold mt-1 mb-4">Transfers</h3>
                    <div className="flex items-center mb-4">
                        <button
                            className={`px-4 py-2 font-bold ${currentPage === 1 ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer'}`}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="black" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0" /></svg>
                        </button>
                        <span className='font-bold text-xl'>
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            className={`px-4 py-2 font-bold ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 12 24"><path fill="black" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-scroll"  id="hide-scrollbar">
                    <table className="w-full text-center">
                        <thead className=''>
                            <tr className="text-gray-500 h-10">
                                <th className='flex justify-center items-center space-x-2 px-4'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z" /><path fill="black" d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z" /></svg></th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6" /></svg>
                                        <h1>Time</h1>
                                    </div>
                                </th>
                                <th className=' px-6'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>From</h1>
                                    </div>
                                </th>
                                <th className='px-6'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>To</h1>
                                    </div>
                                </th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>Value</h1>
                                    </div>
                                </th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>Token</h1>
                                    </div>
                                </th>
                                <th className=' px-4'>
                                    <div className="flex justify-center items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                        <h1>Amount</h1>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" text-center">
                            {currentRows && currentRows.length > 0 ?
                                (currentRows.map((transfer, index) => {
                                    const { icon, timestamp, from, to, value, tokenName, tokenPrice } = transfer;
                                    return (
                                        <tr key={index} className="border-t  h-12  text-center bg-red-600 odd:bg-[#F4F4F4] even:bg-white px-2 py-2">
                                            <td className='flex justify-center items-center mt-2 px-4'><img src={icon} alt={tokenName} /></td>
                                            {/* <td className="text-green-500 me-3 px-4">{timestamp}</td> */}
                                            <td className="text-green-500 me-3 px-4">{new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                            {/* <td className="me-3 px-4">{from}</td>
                                            <td className="me-3 px-4">{to}</td> */}
                                            <td className="me-3 px-4">{from.slice(0, 5) + "..." + from.slice(-4)}</td>
                                            <td className="me-3 px-4">{to.slice(0, 5) + "..." + to.slice(-4)}</td>
                                            {/* <td className='text-green-500'>{transfer.value}</td> */}
                                            <td className="text-green-500 px-4">
                                                {tokenPrice}
                                            </td>
                                            <td className="px-4">{tokenName}</td>
                                            <td className="px-4">{value}</td>
                                        </tr>
                                    );
                                }))
                                :
                                (
                                    <tr className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white ">
                                        <td className='flex justify-center items-center mt-2'><img src={btc} alt="Token Name" /></td>
                                        <td className="text-green-500 text-center">0 days ago</td>
                                        <td className="text-center">0000....000</td>
                                        <td className="text-center">0000....000</td>
                                        <td className='text-green-500'>0.00</td>
                                        {/* <td className="text-green-500">
                                            0.00
                                        </td> */}
                                        <td>BTC</td>
                                        <td>$0.00</td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transfer
