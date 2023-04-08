import React from "react";
import "./styles/PlanScreen.css";

const PlanScreen = () => {
  return (
    <div className="planScreen">
      <div className="planScreen_detail">
        <h4>Plan 1</h4>
        <span>prem. - 649 per month </span>
        <button className="planScreen__button">Subscribe</button>
      </div>
      <div className="planScreen_detail">
        <h4>Plan 2</h4>
        <span>family - 599 per month </span>
        <button className="planScreen__button">Subscribe</button>
      </div>
      <div className="planScreen_detail">
        <h4>Plan 3</h4>
        <span>normal - 399 per month </span>
        <button className="planScreen__button">Subscribe</button>
      </div>
    </div>
  );
};

export default PlanScreen;
