import React from "react";
import "./firstMainHeaderCompo.scss";

const FirstComponentMainHeader = () => {
  return (
    <div className="firstSecComp">
      <section>
        <h2>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h2>
      </section>
      <div className="paragraph-box">
        <p>
          we provide you access to luxury and affordable houses in the metamask,
          get a chance to turn your imgination to reality at our comfort zone
        </p>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Search for location"></input>
        <button className="inputbtn">Search</button>
      </div>
    </div>
  );
};

export default FirstComponentMainHeader;
