import "./secondmain--content.scss";
//import Frame__2 from "../../../../Assets/inspireimages/Frame__2.png";
//import image4s from "../../../Assets/image-4.png";

import SecondImgMain from "./secondimg--main";

const MainPagetwo = () => {
  return (
    <div className="mainpagetwo--div">
      <h1>Inspiration for your next adventure</h1>

      {/**  <div>
        {IMAGES.map((image) => (
          <div key={image.id}>
            {" "}
            <img src={image.img} alt="img-1" />
          </div>
        ))}
      </div>*/}
      <SecondImgMain />
    </div>
  );
};

export default MainPagetwo;
