import React from "react";
import "./firstimgnft.scss";
import EachBoxInfo from "../../../components/main-components/secondmain--compo/second-content/eachbox__content";

const SecondNftSet = () => {
  return (
    <div>
      <div className="firsteach__containner">
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram5.png")}
            alt="frame1"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram6.png")}
            alt="frame2"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram7.png")}
            alt="frame3"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram8.png")}
            alt="frame4"
          />
          <EachBoxInfo />
        </div>
      </div>
    </div>
  );
};

export default SecondNftSet;
