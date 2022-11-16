import React from "react";
import "./eachbox__contrent.scss";

const EachBoxInfo = () => {
  return (
    <div className="eachboxinfo">
      <div className="eachinfo__one">
        <p>Desert King</p>
        <p>2345km away</p>
        <img
          src={require("../../../../Assets/inspireimages/Star.png")}
          alt="star"
        />
      </div>
      <div className="eachinfo__two">
        <p className="onemb_p">1MBT per night</p>
        <p>available for 2weeks stay</p>
      </div>
    </div>
  );
};
export default EachBoxInfo;
