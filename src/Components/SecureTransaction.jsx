import React, { useEffect } from "react";
import Navbar from "./Navbar";
import layerzero from "../Assests/Zerolayer.png";
import eth from "../Assests/eth.png";
import ens from "../Assests/ens.png";
import eth1 from "../Assests/eth1.png";
import usdc from "../Assests/usdc.png";
import arbi from "../Assests/Arbi.png";
import arbi2 from "../Assests/arbi2.png";
import retn from "../Assests/return.png";
import usdt from "../Assests/usdt.png";
import leaf from "../Assests/leaf.png";
import plus from "../Assests/plus.png";
import weth from "../Assests/weth.png";
import twitter from "../Assests/twitter.png";
import world from "../Assests/world.png";
import share from "../Assests/share.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DevUrl } from "../Constants";
import { useTheme } from "./ThemeContext";

const SecureTransaction = () => {
  const [inputValue, setInputValue] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const { darkMode } = useTheme();

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      toast.error("Please enter a valid input.");
      return;
    }

    // Check if the input is a valid Ethereum address or transaction hash
    const isAddress = /^0x[a-fA-F0-9]{40}$/.test(inputValue); // Ethereum address
    const isTxHash = /^0x([A-Fa-f0-9]{64})$/.test(inputValue); // Transaction hash

    if (isAddress) {
      // Navigate to the portfolio-tracker page with the input value
      navigate("/portfoliotracker", { state: { inputValue } });
    } else if (isTxHash) {
      // Navigate to the visualizer page with the input value
      navigate("/visualizer", { state: { inputValue } });
    } else {
      // Show an error message for invalid input
      toast.error(
        "Invalid input. Please enter a valid Ethereum address or transaction hash."
      );
    }
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      const startTime = Date.now();
      setLoading(true);

      try {
        const response = await axios.post(`${DevUrl}/recent-txs`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
          },
        });
        setTransactions(response.data.txs);
        console.log("response:", response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(5000 - elapsedTime, 0);
        setTimeout(() => setLoading(false), remainingTime);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const fetchTokens = async () => {
      const startTime = Date.now();
      setLoading(true);

      try {
        const response = await axios.post(`${DevUrl}/top-tokens`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
          },
        });
        setTrendingTokens(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(5000 - elapsedTime, 0);
        setTimeout(() => setLoading(false), remainingTime);
      }
    };

    fetchTokens();
  }, []);

  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const currentRows = transactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined) return "N/A";
    if (isNaN(num)) return num;

    const absNum = Math.abs(num);
    if (absNum >= 1e9) {
      return `${(num / 1e9).toFixed(2)}B`;
    } else if (absNum >= 1e6) {
      return `${(num / 1e6).toFixed(2)}M`;
    } else {
      return num;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#001938]">
      <div className="">
        <div className="flex flex-col items-center justify-center px-4 py-10">
          <h1 className="mb-4 text-3xl font-bold text-center text-black dark:text-white">
            Secure3 
          </h1>

          <form onSubmit={handleSearchSubmit} className="w-full md:max-w-4xl">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for funds, exchange, transactions..."
              className="w-full px-4 py-3 mb-4 border border-gray-300 shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent sm:mb-0 sm:mr-4 placeholder:text-center"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!inputValue}
                className="px-8 py-3 mt-6 font-semibold text-black transition-all duration-300 bg-green-500 shadow-md w-60 rounded-xl hover:bg-green-600"
              >
                Scan Now
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center xl:items-start">
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="border-t-2 border-b-2 border-green-700 rounded-full animate-spin h-14 w-14"></div>
          </div>
        )}

        <div className=" w-full xl:w-[48%] flex justify-center items-center">
          <div className="w-full ">
           
            <div
              className=" h-[520px] w-full overflow-y-auto"
              id="hide-scrollbar"
            >
              {trendingTokens && trendingTokens.length > 0 ? (
                trendingTokens.map((token, index) => {
                  const {
                    image,
                    name,
                    price_change_24h,
                    current_price,
                    ath,
                    atl,
                    market_cap,
                    total_supply,
                    circulating_supply,
                    total_volume,
                  } = token;
                  return (
                    <div>
                      <div className="border border-green-500 rounded-xl p-4 sm:p-6 shadow-md w-[97%] md:w-[610px]  mb-4 mx-auto">
                        <h3 className="mb-4 text-xl font-semibold text-green-500">
                          TRENDING TOKEN PAGES
                        </h3>

                        <div className="gap-2 md:flex ">
                          <div className=" md:mt-6 md:w-[30%] ">
                            <div className="flex items-center gap-2">
                              <img
                                className="w-12 h-12"
                                src={image}
                                alt="Token"
                              />

                              <div>
                                <h4 className="text-xl font-bold text-black dark:text-white">
                                  {name}
                                </h4>
                              </div>
                            </div>

                            <div>
                              <h4 className="mt-5 text-2xl font-bold text-green-500">
                                ${current_price}
                              </h4>
                              <p
                                className={`text-lg font-semibold ${
                                  price_change_24h < 0
                                    ? "text-red-500"
                                    : "text-[#3C704F]"
                                }`}
                              >
                                {price_change_24h.toFixed(2)}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between md:w-[70%]">
                            <ul className="mt-4 text-sm md:text-lg font-semibold text-[#717175] dark:text-gray-400">
                              <li className="text-nowrap">24H Volume</li>
                              <li className="text-nowrap">Market Cap</li>
                              <li className="text-nowrap">All Time High</li>
                              <li className="text-nowrap">All Time Low</li>
                              <li className="text-nowrap">
                                Circulating Supply
                              </li>
                              <li className="text-nowrap">Total Supply</li>
                            </ul>

                            <ul className="mt-4 text-sm md:text-lg text-[#B0B0B3] text-right">
                              <li>${formatNumber(total_volume)}</li>
                              <li>${formatNumber(market_cap)}</li>
                              <li>${formatNumber(ath)}</li>
                              <li>${formatNumber(atl)}</li>
                              <li>{circulating_supply}</li>
                              <li>{total_supply}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-center">
                  <div className="border border-green-500 rounded-xl p-6 shadow-md w-[330px] md:w-[640px] ml-1 md:ml-20 lg:ml-12">
                    <h3 className="mb-4 text-xl font-semibold text-green-500">
                      TRENDING TOKEN PAGES
                    </h3>

                    <div className="gap-10 md:flex">
                      <div className="mt-6">
                        <div className="flex items-center gap-4">
                          <img
                            className="w-12 h-12"
                            src={layerzero}
                            alt="Token"
                          />

                          <div>
                            <h4 className="text-2xl font-bold text-black dark:text-white">
                              LayerZero
                            </h4>
                          </div>
                        </div>

                        <div>
                          <h4 className="mt-5 text-2xl font-bold text-green-500">
                            $0.00
                          </h4>
                          <p className="text-lg text-[#3C704F] font-semibold">
                            0.00
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between gap-10 md:gap-24">
                        <ul className="mt-4 text-sm md:text-lg font-semibold text-[#717175] dark:text-gray-400">
                          <li>24H Volume</li>
                          <li>Market Cap</li>
                          <li>All Time High</li>
                          <li>All Time Low</li>
                          <li>Circulating Supply</li>
                          <li>Total Supply</li>
                        </ul>

                        <ul className="mt-4 text-sm md:text-lg text-[#B0B0B3] text-right">
                          <li>$000,00,000.00</li>
                          <li>$00,000,000.00</li>
                          <li>$0.00</li>
                          <li>$0.00</li>
                          <li>000,000,000.000</li>
                          <li>0,000,000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" w-full xl:w-[50%] border border-green-400 rounded-md">
          <div className="flex p-3 mt-10 sm:justify-center sm:gap-40 md:gap-72 lg:gap-96 xl:justify-between xl:gap-0 md:mt-0">
            <h3 className="mt-2 text-xl font-semibold text-center text-green-500 xl:text-left ">
              TRANSACTIONS
            </h3>

            <div className="flex items-center">
              <button
                className={`px-4 py-2 font-bold ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50 "
                    : "cursor-pointer"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill={darkMode ? "white" : "black"}
                    d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                  />
                </svg>
              </button>
              <span className="text-xl font-bold text-black dark:text-white">
                {currentPage} / {totalPages}
              </span>
              <button
                className={`px-4 py-2 font-bold ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 12 24"
                >
                  <path
                    fill={darkMode ? "white" : "black"}
                    fill-rule="evenodd"
                    d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full pr-3 mx-auto ">
            <div className="  w-[98%] md:w-[750px] flex justify-center items-center mx-auto ">
              <div className="w-full overflow-x-auto">
                <table className="w-full overflow-hidden text-sm table-auto ">
                  <thead className="">
                    <tr className="bg-[#ADADAD] h-12 ">
                      <th className="pl-10 pr-10">
                        <div className="flex items-center justify-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke={darkMode ? "black" : "white"}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill={darkMode ? "black" : "white"}
                              d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z"
                            />
                            <path
                              fill={darkMode ? "black" : "white"}
                              d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z"
                            />
                          </svg>
                        </div>
                      </th>

                      <th className="pr-10 ">
                        <div className="flex items-center justify-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke={darkMode ? "black" : "white"}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">From</h1>
                        </div>
                      </th>

                      <th className="pl-10 pr-10 ">
                        <div className="flex items-center justify-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke={darkMode ? "black" : "white"}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">To</h1>
                        </div>
                      </th>

                      <th className="pl-10 pr-10">
                        <div className="flex items-center justify-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke={darkMode ? "black" : "white"}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">Token</h1>
                        </div>
                      </th>

                      <th className="pl-10 pr-10">
                        <div className="flex items-center justify-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke={darkMode ? "black" : "white"}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M32 144h448M112 256h288M208 368h96"
                            />
                          </svg>

                          <h1 className="text-[#5D5E63] text-lg">USD</h1>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentRows && currentRows.length > 0 ? (
                      currentRows.map((transaction, index) => {
                        const { from, to, asset, value, logo } = transaction;
                        const tokenPrice = transaction.tokenPrice * value;

                        return (
                          <tr key={index} className="h-12 text-center">
                            <td className="flex items-center justify-center mt-2 ">
                              <img className="w-6 h-6" src={logo} alt="asset" />
                            </td>
                            <td className="text-center text-black dark:text-white">
                              {from.slice(0, 5) + "..." + from.slice(-4)}
                            </td>
                            <td className="text-center text-black dark:text-white">
                              {to.slice(0, 5) + "..." + to.slice(-4)}
                            </td>
                            <td className="flex items-center justify-center gap-2 text-black dark:text-white">
                              <img className="w-5 h-5" src={logo} alt="asset" />{" "}
                              {asset}
                            </td>
                            <td className="text-[#808183] dark:text-white font-semibold text-lg text-center">
                              ${parseFloat(tokenPrice).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="py-4 text-center text-black dark:text-white"
                        >
                          No transactions available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
      />
    </div>
  );
};

export default SecureTransaction;
