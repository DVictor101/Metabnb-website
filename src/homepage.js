import React from "react";

import "./homepage.scss";
import TopMainComponent from "./components/main-components/firstmain-components/firsttop-component";
import NaviComponent from "./components/main-components/navigation/navigationcomp";
import SecondMainComponent from "./components/main-components/secondmain--compo/secondmain--comp/secondcomp";
import MeetanftSection from "./components/main-components/firstmain-components/metanft--section/metanft";
import Footer from "./components/footercomponent/footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopMainComponent />
      <NaviComponent />
      <SecondMainComponent />
      <MeetanftSection />
      <Footer />
    </div>
  );
};

export default Homepage;
