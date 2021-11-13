import React from 'react'

const RightSide = () => {
    return (
        <div className="rightside">
        <div className="inner">
          <div className="user-form">
            <p className="info1">New to ZestMoney ?</p>

            <p className="info2">Get a credit limit upto ₹50,000</p>

            <button>Get Zest</button>
          </div>

          <div className="features-grid">
            <div className="onef">
              {" "}
              <img
                src="https://partner.zestmoney.in/widget/static/media/rocket-icon.5ab6a2ef.svg"
                alt="rocket"
              />{" "}
              <p>Sign up in less than 3 minutes</p>{" "}
            </div>
            <div className="twof">
              <img
                src="https://partner.zestmoney.in/widget/static/media/card.6b1cfaf7.svg"
                alt="card"
              />{" "}
              <p>No credit card needed</p>{" "}
            </div>
            <div className="threef">
              <img
                src="https://partner.zestmoney.in/widget/static/media/paperless.89af9099.svg"
                alt="paper"
              />{" "}
              <p>No paper work needed</p>{" "}
            </div>
            <div className="fourf">
              <img
                src="https://partner.zestmoney.in/widget/static/media/instant.1687faa0.svg"
                alt="light"
              />{" "}
              <p>Instant approval</p>{" "}
            </div>
          </div>
        </div>
      </div>
    )
}

export default RightSide
