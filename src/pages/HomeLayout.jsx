import React, { useState, useEffect } from "react";
import SmallHolderFarmers from "../components/GettingStarted/SmallHolderFarmers";
import FarmAsset from "../components/GettingStarted/FarmAsset";
import Wallet from "../components/GettingStarted/Wallet";
import InitialLoadPage from "../components/GettingStarted/InitialLoadPage";
const HomeLayout = () => {
  const [currentPage, setCurrentPage] = useState("initialPage");

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // After 3000 milliseconds (3 seconds), switch to the first real page
    const timer = setTimeout(() => {
      setCurrentPage("small-holder");
    }, 2 * 60 * 60);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "initialPage":
        return <InitialLoadPage />;
      case "small-holder":
        return (
          <SmallHolderFarmers
            goToPage2={() => goToPage("asset")}
            goToPage3={() => goToPage("wallet")}
          />
        );
      case "asset":
        return <FarmAsset goToPage3={() => goToPage("wallet")} />;
      case "wallet":
        return <Wallet goToPage1={() => goToPage("small-holder")} />;
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-6 bg-gradient-to-b from-emerald-700 from-20% to-slate-500 to-100% w-full h-[100vh]">
      {renderPage()}
    </div>
  );
};

export default HomeLayout;
