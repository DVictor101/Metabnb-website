import React from "react";
import "./nftpage.scss";
import Header from "../components/header/header";
import NftNav from "./nftcomponents/nafnav";
import NftMainPage from "./nftcomponents/nftmainpage";
import Footer from "../components/footercomponent/footer";

const NftPage = () => {
  return (
    <div>
      <Header />
      <NftNav />
      <NftMainPage />
      <Footer />
    </div>
  );
};

export default NftPage;
