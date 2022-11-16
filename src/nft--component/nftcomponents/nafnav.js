import React from "react";
import "./nafnav.scss";
import Frame13 from "../../Assets/nftpageimgs/Frame13.png";

const NftNav = () => {
  return (
    <div className="nftnav">
      {" "}
      <div className="nft-p__container">
        <div>
          <p className="naf__p">Restaurant</p>
        </div>
        <div>
          <p className="naf__p">Cottage</p>
        </div>
        <div>
          <p className="naf__p">Castle</p>
        </div>
        <div>
          <p className="naf__p">fantest city</p>
        </div>
        <div>
          <p className="naf__p">beach</p>
        </div>
        <div>
          <p className="naf__p">Carbins</p>
        </div>
        <div>
          <p className="naf__p">off-grid</p>
        </div>
        <div>
          <p className="naf__p">Farm</p>
        </div>
        <div>
          <img src={Frame13} alt="location" />
        </div>
      </div>
    </div>
  );
};
export default NftNav;
