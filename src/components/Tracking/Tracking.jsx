import React from "react";
import { PiLineVertical } from "react-icons/pi";

const Tracking = () => {
  const trackingNumber = {
    fontSize: "60px",
    fontWeight: "900",
    color: "white",
  };
  const trackingIssue = {
    color: "white",
    opacity: "0.8",
    fontWeight: "400",
  };
  return (
    <div className="bg-linear-to-br from-[#4F39F6] to-[#9514FA]">
      <div className="mx-auto px-80 py-15 flex justify-between items-center text-center">
        <div >
          <h2 style={trackingNumber}>50K+</h2>
          <p style={trackingIssue}>Active Users</p>
        </div>
        <div>
          <PiLineVertical className="text-6xl text-gray-400" />
        </div>
        <div>
          <h2 style={trackingNumber}>200+</h2>
          <p style={trackingIssue}>Premium Tools</p>
        </div>
        <div>
          <PiLineVertical className="text-6xl text-gray-400" />
        </div>
        <div>
          <h2 style={trackingNumber}>4.9</h2>
          <p style={trackingIssue}>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
