import React, { useState } from "react";

import "./header.scss";
import Homelogo from "./metahome--logo";
import Modal from "../Modalcomponent/Modal/Modal";
import { Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="header">
      <div className="meata__headtext">
        <div className="svg--cont">
          <Homelogo />
        </div>
        <div>
          <h1>Metabnb</h1>
        </div>
      </div>

      <div className="head--homelist">
        <p>
          <Link className="linkedtext" to="/" id="homepage">
            Home
          </Link>
        </p>
        <p>Place to stay</p>
        <p>
          <Link className="linkedtext" to="/nft" id="nft">
            NFTs
          </Link>
        </p>
        <p>Community</p>
      </div>

      <div className="btndiv">
        <button onClick={() => setOpenModal(true)}>Connect wallet</button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};
export default Header;
