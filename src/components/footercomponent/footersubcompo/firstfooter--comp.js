import React from "react";
import "./firstfooter--comp.scss";
import homelogoblack from "../../../Assets/footerimages/homelogoblack.jpg";
import facebooklogo from "../../../Assets/footerimages/facebooklogo.png";
import instagram from "../../../Assets/footerimages/instagram.jpg";
import twitterlogo from "../../../Assets/footerimages/twitterlogo.jpg";
import atlogo from "../../../Assets/footerimages/atlogo.jpg";
import metaimg from "../../../Assets/footerimages/metaimg.png";

const FirstFooterComp = () => {
  return (
    <div className="firstfootercomp">
      <div className="metafoot--comp">
        {" "}
        <img className="footimg" src={homelogoblack} alt="img-1" />
        <img className="footimger" src={metaimg} alt="img-1" />
      </div>
      <div className="facebook-foot">
        <div className="facebook-footins">
          {" "}
          <img className="footimg" src={facebooklogo} alt="img-1" />{" "}
          <img className="footimg" src={instagram} alt="img-1" />{" "}
          <img className="footimg" src={twitterlogo} alt="img-1" />
        </div>
        <div className="atlogo--comp">
          {" "}
          <img className="footimg" src={atlogo} alt="img-1" />
          <span>2022 Metabnb</span>
        </div>
      </div>
    </div>
  );
};

export default FirstFooterComp;
