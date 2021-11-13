import React from "react";

const EmiPlans = () => {
  return (
    <div className="emiplans">
      <div className="six-month">
        <div className="info">
          <p className="dis1 head1">
            Pay in <span>6 months</span>{" "}
          </p>

          <p className="dis2 head2"> </p>
        </div>
        <div className="info1">
          <p className="dis1">EMI amount</p>

          <p className="dis2">₹ 3200</p>
        </div>
        <div className="info2">
          <p className="dis1">Processing fee</p>

          <p className="dis2">₹ 150</p>
        </div>
      </div>


      <div className="nine-month">
        <div className="info">
          <p className="dis1 head1">
            Pay in <span>9 months</span>{" "}
          </p>

          <p className="dis2 head2"> </p>
        </div>

        <div className="info1">
          <p className="dis1">EMI amount</p>

          <p className="dis2">₹ 3200</p>
        </div>
        <div className="info2">
          <p className="dis1">Processing fee</p>

          <p className="dis2">₹ 150</p>
        </div>
        
      </div>
    </div>
  );
};

export default EmiPlans;
