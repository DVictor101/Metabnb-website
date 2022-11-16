import React from "react";
import "./metanft.scss";
import image7 from "../../../../Assets/metanft-images/image7.png";
import image8 from "../../../../Assets/metanft-images/image8.png";
import image9 from "../../../../Assets/metanft-images/image9.png";

const MeetanftSection = () => {
  return (
    <div className="metanft--div">
      <div className="first-metanft--div">
        <h1> Metabnb NFTs</h1>

        <p>
          {" "}
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>

        <button className="metanft--btn">Learn more</button>
      </div>
      <div className="second-metanft--div">
        <div>
          <img className="img-1" src={image7} alt="img-7" />{" "}
          <img className="img-2" src={image8} alt="img-8" />{" "}
          <img className="img-3" src={image9} alt="img-9" />
        </div>
      </div>
    </div>
  );
};

export default MeetanftSection;
