import React from "react";
import "./footer.scss";
import FirstFooterComp from "./footersubcompo/firstfooter--comp";
import SeconFooterComp from "./footersubcompo/secondfoooter--comp";
import ThirdFooterComp from "./footersubcompo/thirdfooter--comp";
import FourthFooterComp from "./footersubcompo/fourthfooter--comp";

const Footer = () => {
  return (
    <div className="footer">
      <FirstFooterComp />
      <div className="heretocorrect">
        <SeconFooterComp />
        <ThirdFooterComp />
        <FourthFooterComp />
      </div>
    </div>
  );
};
export default Footer;
