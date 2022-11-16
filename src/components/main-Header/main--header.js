import React from "react";
import "./main--header.scss";
import FirstComponentMainHeader from "./main-Header__firstCom/firstMainHeaderCompo";
import SecondMainHeaderCompo from "./main-Header__firstCom/secondMainHeaderCompo";

const MainHeader = () => {
  return (
    <div className="mainheader">
      <FirstComponentMainHeader />
      <SecondMainHeaderCompo />
    </div>
  );
};

export default MainHeader;
