import React, { useState } from "react";
import "./scss/style.css";
import Widget from "./components/Widget";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <p className="widget_trigger" onClick={() => setShow(!show)}>
        {" "}
        or pay later with <img src="https://partner.zestmoney.in/widget/static/media/zest-logo2.ec32bae7.svg" alt="logo" />
      </p>

      {show ? <Widget show={show} setShow={setShow} /> : null}
    </>
  );
}

export default App;
