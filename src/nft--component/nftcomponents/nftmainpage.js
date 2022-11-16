import React from "react";
import "./nftmainpage.scss";
import FirstNftSet from "./nftimages/firstimgset";
import SecondNftSet from "./nftimages/secontnftimg";
import ThirdNftSet from "./nftimages/thirdnftimg";
import FourthNftSet from "./nftimages/fourthnftimg";
const NftMainPage = () => {
  return (
    <div className="nftmainpage">
      <div className="responseivenft">
        <FirstNftSet />
        <SecondNftSet />
      </div>
      <div className="responseivenft">
        <ThirdNftSet />
        <FourthNftSet />
      </div>
    </div>
  );
};
export default NftMainPage;
