import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Modal from "./modal UI/Modal";

const Widget = ({ show, setShow }) => {
  return (
    <div className="zestmoney-backdrop">

      <Modal className="zestmoney_modal">

        {/* === left side === */}
        <LeftSide show={show} setShow={setShow} />
        {/* === right side === */}
        <RightSide />

      </Modal>

    </div>
  );
};

export default Widget;
