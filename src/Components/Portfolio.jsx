const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const chains = ["All Chains", "Ethereum", "Binance Smart Chain", "Polygon", "Avalanche"];
    const [loading, setLoading] = useState(false);
    const [portfolioData, setPortfolioData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedChain, setSelectedChain] = useState("All Chains");
    const [totalValue, setTotalValue] = useState(0);

    const rowsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const currentRows = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    useEffect(() => {
        const fetchPortfolioTracker = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://caiman-wanted-fox.ngrok-free.app/fetch-address-details/0x04b21735E93Fa3f8df70e2Da89e6922616891a88",
                    {
                        headers: {
                            "ngrok-skip-browser-warning": "true",
                            "Content-Type": "application/json",
                        },
                    }
                );

                const tokens = response.data.tokens[0];
                setPortfolioData(tokens);
                setFilteredData(tokens);

                // Calculate total value
                const total = tokens.reduce((sum, item) => {
                    const price = parseFloat(item.tokenPrice || 0);
                    const holdings = parseFloat(item.tokenBalance || 0);
                    return sum + price * holdings;
                }, 0);

                setTotalValue(total.toFixed(2));
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };

        fetchPortfolioTracker();
    }, []);

    const handleFilterChange = (chain) => {
        setSelectedChain(chain);
        if (chain === "All Chains") {
            setFilteredData(portfolioData); // Show all assets
        } else {
            const filtered = portfolioData.filter((item) => item.chainName === chain); // Filter by chain
            setFilteredData(filtered);
        }
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div>
            <div className="bg-white p-6 w-full xl:w-[100%] rounded-xl border border-black shadow-md shadow-gray-500">
                <div className="md:flex justify-between items-center">
                    <div className="flex gap-2 items-center mb-4 lg:mb-0">
                        <img className="h-8 w-8" src={Port} alt="portfolio" />
                        <h3 className="text-xl lg:text-2xl font-semibold">Portfolio</h3>
                        <p>This update allows users to view all assets in their portfolio by default, regardless of the chain they belong to. They can also filter assets by selecting a specific blockchain (e.g., Ethereum, Binance Smart Chain, etc.) from a dropdown. If "All Chains" is selected, all assets will be displayed together, ensuring that users can see their complete portfolio in one place while still having the option to filter by chain when needed.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-bold">
                            Total Value: ${totalValue}
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-t from-[#d3d3d3] to-white text-black rounded-lg border border-black shadow-md hover:bg-gray-300 transition"
                        >
                            <span className="font-semibold">Filter: {selectedChain}</span>
                            <TiArrowSortedDown />
                        </button>
                        {isOpen && (
                            <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                {chains.map((chain, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => {
                                            handleFilterChange(chain);
                                            setIsOpen(false); // Close dropdown
                                        }}
                                    >
                                        {chain}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="h-10">
                                <th>Asset</th>
                                <th>Price</th>
                                <th>Holdings</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.length > 0 ? (
                                currentRows.map((item, index) => {
                                    const asset = item.tokenName;
                                    const price = parseFloat(item.tokenPrice || 0).toFixed(2);
                                    const holdings = parseFloat(item.tokenBalance || 0).toFixed(4);
                                    const value = (price * holdings).toFixed(2);
                                    return (
                                        <tr key={index} className="border-t h-12 odd:bg-[#F4F4F4] even:bg-white">
                                            <td>{asset}</td>
                                            <td>${price}</td>
                                            <td>{holdings}</td>
                                            <td>${value}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-gray-500">
                                        No data available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 font-bold ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                        Previous
                    </button>
                    <span className="mx-4">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 font-bold ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
