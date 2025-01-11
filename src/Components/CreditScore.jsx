import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DevUrl } from "../Constants";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: DevUrl,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json",
  },
});

const CreditScore = () => {
  const [activeTab, setActiveTab] = useState("wallet");
  const [inputValue, setInputValue] = useState("");
  const [inputChain, setInputChain] = useState("ethereum");
  const [validatedData, setValidatedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [creditScore, setCreditScore] = useState(null);

  const fetchWalletCreditScore = async (address, chain) => {
    setIsLoading(true);
    try {
      const endpoint =
        chain === "algorand"
          ? "/algo-wallet-credit-score"
          : "/wallet-credit-score";
      const { data } = await apiClient.post(endpoint, { address });

      console.log("score:", data);

      setCreditScore(data);

      return true;
    } catch (error) {
      console.error("Error fetching credit score:", error);

      let errorMessage = "Failed to fetch credit score. Please try again.";

      if (error.response) {
        switch (error.response.status) {
          case 404:
            errorMessage = "Credit score endpoint not found.";
            break;
          case 400:
            errorMessage =
              error.response.data.message ||
              "Invalid request. Please check your input.";
            break;
          case 500:
            errorMessage = "Server error. Please try again later.";
            break;
          default:
            errorMessage =
              error.response.data.message || "An unexpected error occurred.";
        }
      } else if (error.request) {
        errorMessage =
          "Could not connect to the server. Please check your connection.";
      }

      toast.error(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSCCreditScore = async (address, chain) => {
    setIsLoading(true);
    try {
      const endpoint =
        chain === "algorand" ? "/algo-sc-credit-score" : "/sc-credit-score";
      const { data } = await apiClient.post(endpoint, {
        address: address,
        chain: chain,
      });

      console.log("score:", data);

      setCreditScore({
        creditScore: Math.round(data.creditScore),
        successPc: Math.round(data.successPc),
        verificationStatus: data.verificationStatus,
        diversityScore: parseFloat(data.diversityScore.toFixed(2)), // Keeps diversity score to 2 decimal places
      });

      return true;
    } catch (error) {
      console.error("Error fetching credit score:", error);

      let errorMessage = "Failed to fetch credit score. Please try again.";

      if (error.response) {
        switch (error.response.status) {
          case 404:
            errorMessage = "Credit score endpoint not found.";
            break;
          case 400:
            errorMessage =
              error.response.data.message ||
              "Invalid request. Please check your input.";
            break;
          case 500:
            errorMessage = "Server error. Please try again later.";
            break;
          default:
            errorMessage =
              error.response.data.message || "An unexpected error occurred.";
        }
      } else if (error.request) {
        errorMessage =
          "Could not connect to the server. Please check your connection.";
      }

      toast.error(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const validateInput = async () => {
    const walletRegex = /^0x[a-fA-F0-9]{40}$/;
    const appIdRegex = /^[1-9][0-9]*$/;
    const algoAddressRegex = /^[A-Z2-7]{58}$/;
    let isValid;
    let isAlgorand = false;

    if (inputChain === "algorand" && activeTab !== "wallet") {
      isValid = appIdRegex.test(inputValue);
      if (!isValid) {
        toast.error("Invalid app ID. Please enter a valid value.");
        setInputValue("");
        return;
      }
    } else {
      isValid = walletRegex.test(inputValue);
      if (!isValid && algoAddressRegex.test(inputValue)) {
        isValid = true;
        isAlgorand = true;
      } else if (!isValid) {
        toast.error("Invalid address. Please enter a valid value.");
        setInputValue("");
        return;
      }
    }

    const scoresFetched =
      activeTab === "wallet"
        ? await fetchWalletCreditScore(
            inputValue,
            isAlgorand ? "algorand" : "ethereum"
          )
        : await fetchSCCreditScore(inputValue, inputChain);

    if (scoresFetched) {
      toast.success(
        `${
          activeTab === "wallet" ? "Wallet address" : "Smart Contract"
        } is valid!`
      );
      setValidatedData({
        type: activeTab,
        value: inputValue,
      });
      setInputValue("");
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setValidatedData(null);
    setCreditScore(null);
  };

  return (
    <div className="bg-white dark:bg-[#001938] min-h-screen">
      <div className="flex justify-center gap-5 py-10">
        <div>
          <button
            className={`relative py-6 px-10 shadow-xl text-2xl md:px-24 ${
              activeTab === "wallet"
                ? "bg-green-500 after:content-[''] after:absolute after:bottom-[-18px] after:left-1/2 after:-translate-x-1/2 after:border-l-[26px] after:border-l-transparent after:border-r-[26px] after:border-r-transparent after:border-t-[26px] after:border-t-green-500"
                : "bg-gray-300"
            }`}
            onClick={() => {
              handleTabChange("wallet");
              setInputChain("ethereum");
            }}
          >
            Wallet
          </button>
        </div>
        <div>
          <button
            className={`relative py-6 px-2 shadow-xl text-2xl md:px-16 ${
              activeTab === "smartContract"
                ? "bg-green-500 after:content-[''] after:absolute after:bottom-[-18px] after:left-1/2 after:-translate-x-1/2 after:border-l-[26px] after:border-l-transparent after:border-r-[26px] after:border-r-transparent after:border-t-[26px] after:border-t-green-500"
                : "bg-gray-300"
            }`}
            onClick={() => handleTabChange("smartContract")}
          >
            Smart Contract
          </button>
        </div>
      </div>

      <div>
        {validatedData ? (
          <div className="my-10">
            <div
              className={`flex justify-center mb-4 text-4xl ${
                validatedData.type === "wallet" ? "lg:mr-20" : "lg:mr-0"
              } sm:mr-0 md:mr-0`}
            >
              <p className="gap-4 font-semibold text-gray-700 dark:text-gray-200">
                {validatedData.type === "wallet"
                  ? "Wallet Address"
                  : "Smart Contract Address"}
                :{" "}
                <span className="text-green-500">
                  {`${validatedData.value.slice(
                    0,
                    5
                  )}...${validatedData.value.slice(-4)}`}
                </span>
              </p>
            </div>

            <div className="text-center">
              {isLoading ? (
                <div className="text-3xl font-bold text-green-500 animate-pulse">
                  Loading...
                </div>
              ) : activeTab === "wallet" ? (
                <div>
                  <div className="flex items-center justify-center gap-5 lg:mr-44 sm:mr-0 md:mr-0">
                    <h1 className="text-5xl text-black dark:text-white">
                      Credit Score
                    </h1>
                    <h1 className="text-6xl font-bold text-green-500">
                      {creditScore}
                    </h1>
                  </div>
                  <div className="flex flex-col items-center px-10 mt-10 mb-10 text-left">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className=" bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px]">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                          Borrowing History
                        </h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          Features linked to historical loan repayment
                          performance.
                        </p>
                      </div>
                      <div className="bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px]">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                          Account Composition
                        </h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          Features linked to the asset breakdown within an
                          account.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                      <div className="bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px]">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                          Account Health
                        </h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          Features linked to the size and volume of activity
                          within an account.
                        </p>
                      </div>
                      <div className="bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px] ">
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                          Interactions
                        </h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          Features linked to the account's involvement in the
                          web3 ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                creditScore && (
                  <div className="">
                    <div className="flex items-center justify-center gap-5 lg:mr-60 sm:mr-0 md:mr-0">
                      <h1 className="text-5xl text-black dark:text-white">
                        Credit Score
                      </h1>
                      <p className="text-6xl font-bold text-green-500">
                        {creditScore.creditScore}
                      </p>
                    </div>
                    <div className="flex flex-col items-center px-10 mt-10 mb-10 text-left">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className=" bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px]">
                          <h2 className="text-xl font-semibold text-black dark:text-white">
                            Tx Success %
                          </h2>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">
                            Measures the ratio of successful transactions to
                            total transactions executed by the smart contract.
                          </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px]">
                          <h2 className="text-xl font-semibold text-black dark:text-white">
                            Verification Status
                          </h2>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">
                            Indicates whether the smart contract's source code
                            is publicly verified and accessible.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                        <div className="bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px]">
                          <h2 className="text-xl font-semibold text-black dark:text-white">
                            Diversity Score
                          </h2>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">
                            Evaluates the variety of unique interactions and
                            addresses engaging with the smart contract.
                          </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-[#001938] rounded-md shadow-md p-4 border border-gray-300 dark:border-gray-700 w-full max-w-[300px] ">
                          <h2 className="text-xl font-semibold text-black dark:text-white">
                            Security Score
                          </h2>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">
                            Determining how secure the smart contract is by
                            evaluating possible vulnerabilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <p className="mt-4 text-center text-gray-500">
              Your {validatedData.type} is valid. Analysis is available.
            </p>
          </div>
        ) : (
          <div className="flex justify-center my-10">
            <div className="items-center w-80 md:w-full md:max-w-3xl">
              <input
                type="text"
                placeholder={`Enter ${
                  activeTab === "wallet"
                    ? "Wallet Address"
                    : "Smart Contract Address"
                }`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-4 py-3 mb-4 border border-gray-300 shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent sm:mb-0"
                disabled={isLoading}
              />
              {activeTab === "smartContract" && (
                <div className="mt-4">
                  <label
                    htmlFor="blockchain-select"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Select Blockchain
                  </label>
                  <select
                    id="blockchain-select"
                    className="block w-full p-3 mt-2 mb-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setInputChain(e.target.value)}
                  >
                    <option value="ethereum">Ethereum</option>
                    <option value="arbitrum">Arbitrum</option>
                    <option value="optimism">Optimism</option>
                    <option value="polygon">Polygon</option>
                    <option value="algorand">Algorand</option>
                  </select>
                </div>
              )}

              <div className="flex justify-center my-5">
                <button
                  onClick={validateInput}
                  disabled={isLoading}
                  className={`bg-green-500 w-56 lg:w-40 text-center text-black font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300 ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-green-600"
                  }`}
                >
                  {isLoading ? "Loading..." : "Scan Now"}
                </button>
              </div>
            </div>
          </div>
        )}
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
      <Footer />
    </div>
  );
};

export default CreditScore;
