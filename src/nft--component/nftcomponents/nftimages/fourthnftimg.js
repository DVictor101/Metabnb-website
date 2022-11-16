import React from "react";
import "./firstimgnft.scss";
import EachBoxInfo from "../../../components/main-components/secondmain--compo/second-content/eachbox__content";

const FourthNftSet = () => {
  return (
    <div>
      <div className="firsteach__containner">
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram13.png")}
            alt="frame1"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram14.png")}
            alt="frame2"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram15.png")}
            alt="frame3"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram16.png")}
            alt="frame4"
          />
          <EachBoxInfo />
        </div>
      </div>
    </div>
  );
};

export default FourthNftSet;
