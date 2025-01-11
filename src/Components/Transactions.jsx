import React from 'react';
import eth1 from "../Assests/eth1.png";
import arbi from "../Assests/Arbi.png";
import arbi2 from "../Assests/arbi2.png";
import retn from "../Assests/return.png";
import usdt from "../Assests/usdt.png";
import leaf from "../Assests/leaf.png";
import plus from "../Assests/plus.png";
import weth from "../Assests/weth.png";

const Transactions = () => {
  return (
    <div>
      <div className=''>
                        <h3 className="text-xl font-semibold text-green-500 ml-2 mb-4">TRANSACTIONS</h3>
                        <div className="rounded-xl px-6 py-8 border border-black shadow-md shadow-gray-500 w-[350px] md:w-[750px] lg:w-full">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full text-sm">
                                    <thead>
                                        <tr className="bg-[#ADADAD] h-12">
                                            <th className='px-4'>
                                                <div className='flex justify-center items-center space-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z" /><path fill="white" d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z" /></svg></div>
                                            </th>
                                            <th className='px-6 md:px-4'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>From</h1>
                                                </div>
                                            </th>
                                            <th className='px-28 md:px-24'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>To</h1>
                                                </div>
                                            </th>
                                            <th className='px-8 md:px-4'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>Token</h1>
                                                </div>
                                            </th>
                                            <th className='px-8 md:px-4'>
                                                <div className="flex justify-center items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                                                    <h1 className='text-[#5D5E63] text-lg'>USD</h1>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-4 w-4' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1></div></td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1></div></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={retn} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Hop Protocol: L2 US..</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={usdt} alt='usdt' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>USDT</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$64.12</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi2} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0xB11f50778880...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={leaf} alt='img' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Owlt Finance: Bridge...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={eth1} alt='eth' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>ETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$5.89</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                        <tr className='h-12 text-center'>
                                            <td className='flex justify-center items-center mt-2 px-4'><img className='h-6 w-6' src={arbi} alt='img' /></td>
                                            <td className='text-[#C4C4C6] font-semibold text-lg px-4'>0x975580eb2JKD...</td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={plus} alt='plus' />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>Camelot: Algebra Po...</h1>
                                                </div>
                                            </td>
                                            <td className='px-4'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <img className='h-5 w-5' src={weth} alt="" />
                                                    <h1 className='text-[#C4C4C6] font-semibold text-lg'>WETH</h1>
                                                </div>
                                            </td>
                                            <td className='text-[#808183] font-semibold text-lg px-4'>$626.85</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Transactions
