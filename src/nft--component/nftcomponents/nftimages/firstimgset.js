import React from "react";
import "./firstimgnft.scss";
import EachBoxInfo from "../../../components/main-components/secondmain--compo/second-content/eachbox__content";

const FirstNftSet = () => {
  return (
    <div>
      <div className="firsteach__containner">
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram1.jpg")}
            alt="frame1"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram2.png")}
            alt="frame2"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram3.png")}
            alt="frame3"
          />
          <EachBoxInfo />
        </div>{" "}
        <div className="each__box">
          {" "}
          <img
            src={require("../../../Assets/nftpageimgs/Fram4.png")}
            alt="frame4"
          />
          <EachBoxInfo />
        </div>
      </div>
    </div>
  );
};

export default FirstNftSet;
