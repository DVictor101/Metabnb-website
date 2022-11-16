import React from "react";
import "./secondimg--main.scss";
import EachBoxInfo from "./eachbox__content";

const SecondImgMain = () => {
  return (
    <div className="secimgmain__parent">
      <div className="sec__main__img">
        <div className="sec__sec__img">
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__1.png")}
              alt="frame1"
            />
            <EachBoxInfo />
          </div>
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__2.png")}
              alt="frame2"
            />
            <EachBoxInfo />
          </div>
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__3.png")}
              alt="frame3"
            />
            <EachBoxInfo />
          </div>
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__4.png")}
              alt="frame4"
            />
            <EachBoxInfo />
          </div>
        </div>
        <div className="seconeachbox">
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__5.png")}
              alt="frame5"
            />
            <EachBoxInfo />
          </div>
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__6.png")}
              alt="frame6"
            />
            <EachBoxInfo />
          </div>

          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__7.png")}
              alt="frame7"
            />
            <EachBoxInfo />
          </div>
          <div className="each__box">
            <img
              src={require("../../../../Assets/inspireimages/Frame__8.png")}
              alt="frame8"
            />
            <EachBoxInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondImgMain;
