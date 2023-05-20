import React from "react";
import "./styles/PlanScreen.css";

const PlanScreen = () => {
  return (
    <div className="planScreen">
      <div className="planScreen_detail">
        <h4>Plan 1</h4>
        <span>prem. - 649 per month </span>
        <button
          className="planScreen__button"
          onClick={() => {
            alert(
              "Thankyou for purchasing out premium plan. Enjoy 4K UHD quality"
            );
          }}
        >
          Subscribe
        </button>
      </div>
      <div className="planScreen_detail">
        <h4>Plan 2</h4>
        <span>family - 599 per month </span>
        <button
          className="planScreen__button"
          onClick={() => {
            alert(
              "Thankyou for purchasing out family plan. Now enjoy upto 5 simultaneous screens with 1080p FHD quality"
            );
          }}
        >
          Subscribe
        </button>
      </div>
      <div className="planScreen_detail">
        <h4>Plan 3</h4>
        <span>Standard - 399 per month </span>
        <button
          className="planScreen__button"
          onClick={() => {
            alert(
              "Thankyou for purchasing out standard plan. Now enjoy 720p HD quality"
            );
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PlanScreen;
