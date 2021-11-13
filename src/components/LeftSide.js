import React, {useState} from 'react'
import EmiPlans from "./EmiPlans";


const LeftSide = ({ show, setShow }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="leftside">
    <p className="close-btn" onClick={() => setShow(!show)}>
      {" "}
      <span>x</span>
    </p>
    <img
      src="https://partner.zestmoney.in/widget/static/media/zest-logo.abab3fa2.svg"
      className="logo"
      alt=""
    />

    <p className="zestmoney-intro">Buy Now, Pay Over 3 Months</p>

    <div className="intrest">
      <p>
        <span>₹0</span> Downpayment
      </p>
      <p>
        <span>₹0</span> Intrest
      </p>
      <p>
        <span>₹0</span> Processing fee
      </p>
    </div>

    <div className="pay-today">
      <div className="pay-today_backdrop">
        <h3>
          Pay <span>₹0</span> today
        </h3>
      </div>

      <div className="pay-no">
        <div className="pay1">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="price">₹800</p>
          <p className="month">Month 1</p>
        </div>
        <div className="pay2">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="price">₹800</p>
          <p className="month">Month 2</p>
        </div>
        <div className="pay3">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="price">₹800</p>
          <p className="month">Month 3</p>
        </div>
      </div>

      <div className="emi_info">
        <p>Interest charged will be refunded after each repayment</p>
      </div>
    </div>

    {display ? <EmiPlans /> : null}

    <div className="dropdown" onClick={() => setDisplay(!display)}>
      <p>
        {display ? (
          <>
            {" "}
            Show less <i
              className="fa fa-angle-up"
              aria-hidden="true"
            ></i>{" "}
          </>
        ) : (
          <>
            {" "}
            Explore other plans{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
          </>
        )}
      </p>
    </div>

    <p className="select">
      Select <span className="highlight">CashFree</span> at checkout & choose{" "}
      <span className="highlight">Zest</span>{" "}
    </p>
  </div>
  )
}

export default LeftSide