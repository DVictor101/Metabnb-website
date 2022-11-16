import React from "react";
import "./secondmainHeaderCompo.scss";
import image1 from "../../../Assets/image-1.jpg";
import image2 from "../../../Assets/image-2.png";
import image3 from "../../../Assets/image-3.png";
import image4s from "../../../Assets/image-4.png";

const SecondMainHeaderCompo = () => {
  return (
    <div className="secondmainsec">
      <div className="first-img-box">
        <img className="imgedery" src={image1} alt="img-1" />
        <img className="imgedery" src={image2} alt="img-1" />
      </div>
      <div className="second-img-box">
        <img className="imgedery" src={image3} alt="img-1" />
        <img className="imgedery" src={image4s} alt="img-1" />
      </div>
    </div>
  );
};

export default SecondMainHeaderCompo;
