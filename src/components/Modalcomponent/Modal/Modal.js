import React from "react";
import "./modal.scss";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="modal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__cont"
      >
        <div className="modalhead">
          <div className="modalh4__cont">
            <h4 className="modalh4">Connect wallet</h4>
            <img
              onClick={onClose}
              className="modalimged"
              src={require("../../../Assets/modalimages/modalcancel.png")}
              alt="frame2"
            />
          </div>

          <div className="modal--p-cont">
            <p>choose your preferred wallet:</p>
            <div className="input--cont">
              <input
                className="modalinput"
                type="text"
                placeholder="Metamask"
              />
              <img
                className="modalimgedmet"
                src={require("../../../Assets/modalimages/modalmeta.png")}
                alt="frame7"
              />
              <img
                className="modalimgedvec"
                src={require("../../../Assets/modalimages/Vector.png")}
                alt="frame9"
              />
            </div>
            <div className="modal--p-conted">
              <input
                className="modalinput"
                type="text"
                placeholder="WalletConnect"
              />
              <img
                className="modalimgedvecg"
                src={require("../../../Assets/modalimages/modalun.png")}
                alt="frame2"
              />
              <img
                className="modalimgedvecd"
                src={require("../../../Assets/modalimages/Vector.png")}
                alt="frame9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
